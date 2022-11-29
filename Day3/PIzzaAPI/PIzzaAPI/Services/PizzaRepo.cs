using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PIzzaAPI.Models;

namespace PIzzaAPI.Services
{
    public class PizzaRepo : IRepo<int, Pizza>
    {
        private readonly PizzaContext _context;
        private readonly ILogger<PizzaRepo> _logger;

        public PizzaRepo(PizzaContext context, ILogger<PizzaRepo> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Pizza> Add(Pizza item)
        {
            try
            {
                _context.Pizzas.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            return null;
        }

        public async Task<Pizza> Delete(int key)
        {
            try
            {
                Pizza item = await Get(key);
                _context.Pizzas.Remove(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            return null;
        }

        public async Task<Pizza> Get(int key)
        {
            try
            {
                Pizza pizza = await _context.Pizzas.FirstOrDefaultAsync(p => p.Id == key);
                return pizza;
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            return null;
        }

        public async Task<ICollection<Pizza>> GetAll()
        {
            IList<Pizza> items = _context.Pizzas.ToList();
            if (items.Count == 0)
                return null;
            return items;
        }

        public async Task<Pizza> Update(Pizza item)
        {
            try
            {
                Pizza pizza = await Get(item.Id);
               if(pizza != null)
                {
                    pizza.Name = item.Name;
                    pizza.Price = item.Price;
                    pizza.IsFav = item.IsFav;
                    pizza.Likes = item.Likes;
                    pizza.Pic = item.Pic;
                    await _context.SaveChangesAsync();
                    return pizza;
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            return null;
        }
    }
}
