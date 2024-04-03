using System.ComponentModel.DataAnnotations;

namespace BackEndApplication.DTOs
{
    public class UserForAuthenticationDTO
    {
        [Required(ErrorMessage = "Email is required.")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; set; }
    }
}
