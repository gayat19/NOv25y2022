using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Models
{
    public class MovieContext :DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public MovieContext(DbContextOptions options):base(options)
        {

        }
    }
}
