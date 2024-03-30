using BackEndApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEndApplication.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> optios) :base(optios) { }

        public DbSet<User> Users { get; set; }
    }

   
}
