using Microsoft.EntityFrameworkCore;

namespace PIzzaAPI.Models
{
    public class PizzaContext :DbContext
    {
        public PizzaContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Pizza> Pizzas { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pizza>().HasData(
                new Pizza
                {
                    Id=101,
                    Name="Cheese Overloaded",
                    Price=275.3f,
                    Pic="assets/images/Pic1.jpg",
                    IsFav=true,
                    Likes=0
                },
                new Pizza
                {
                    Id = 102,
                    Name = "Veg Extravanganza",
                    Price = 450.75f,
                    Pic = "assets/images/Pic2.jpg",
                    IsFav = false,
                    Likes = 0
                }
                );
        }
    }
}
