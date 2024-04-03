using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndApplication.Models;
using BackEndApplication.Data;
using Microsoft.AspNetCore.Authorization;
using BackEndApplication.JwtFeatures;
using Microsoft.AspNetCore.Identity;
using BackEndApplication.DTOs;
using System.IdentityModel.Tokens.Jwt;

namespace BackEndApplication.Controllers
{
    [Route("api/[controller]")]
   // [Authorize]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        //private readonly IMapper _mapper;
        private readonly JwtHandler _jwtHandler;
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context, UserManager<User> userManager, JwtHandler jwtHandler)
        {
            _context = context;
            _userManager = userManager;
            _jwtHandler = jwtHandler;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserForAuthenticationDTO userForAuthentication)
        {            var user = await _userManager.FindByEmailAsync("string");

            Console.WriteLine("USER:::" + user.Email + ' ' + user.Password + ' ' + userForAuthentication.Password);
            //var response = await _userManager.CheckPasswordAsync(user, userForAuthentication.Password);
            //Console.WriteLine(response);
            if (user == null || user.Password != userForAuthentication.Password)
                return Unauthorized(new AuthResponseDTO { ErrorMessage = "Invalid Authentication" });
            if (user != null)
            {
                Console.WriteLine("passed error" + user.Email);

            }
            var signingCredentials = _jwtHandler.GetSigningCredentials();
            Console.WriteLine(signingCredentials.ToString());
            var claims = _jwtHandler.GetClaims(user.Email);
            Console.WriteLine("passed claims");
            var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            return Ok(new AuthResponseDTO { IsAuthSuccessful = true, Token = token });
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("text")]
        public string GetText()
        {

            return "lalala";
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(long id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(long id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
