using PIzzaAPI.Models;
using System.Security.Cryptography;

namespace PIzzaAPI.Services
{
    public class PizzaService
    {
        private readonly IRepo<int, Pizza> _repo;

        public PizzaService(IRepo<int,Pizza> repo)
        {
            _repo = repo;
        }
        public async Task<IList<Pizza>> GetAll()
        {
            return (await _repo.GetAll()).ToList(); 
        }
        public async Task<Pizza> IncrementLikes(int key)
        {
            Pizza pizza = await _repo.Get(key);
            if (pizza != null)
            {
                pizza.Likes++;
                Pizza likes = await _repo.Update(pizza);
                return likes;
            }
            return null;
        }
        public async Task<Pizza> ChangeFav(int key)
        {
            Pizza pizza = await _repo.Get(key);
            pizza.IsFav = !pizza.IsFav;
            Pizza fav = await _repo.Update(pizza);
            if (fav != null)
                return fav;
            return null;
        }
        public async Task<Pizza> AddPizza(Pizza pizza)
        {
            Pizza newPizza = await _repo.Add(pizza);
            return newPizza;
        }
    }
}
