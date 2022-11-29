using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PIzzaAPI.Models;
using PIzzaAPI.Services;

namespace PIzzaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCors")]
    public class PizzaController : ControllerBase
    {
        private readonly PizzaService _service;

        public PizzaController(PizzaService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<ActionResult<List<Pizza>>> GetAll()
        {
            var pizzas = await _service.GetAll();
            if (pizzas == null)
                return NotFound("No Pizza");
            return Ok(pizzas);

        }
        [HttpPost]
        [Route("UpdateLike")]
        public async Task<ActionResult<Pizza>> UpdateLike(int key)
        {
            var myPizza = await _service.IncrementLikes(key);
            if (myPizza == null)
                return BadRequest();
            return Ok(myPizza);
        }
        [HttpPost]
        [Route("UpdateFav")]
        public async Task<ActionResult<Pizza>> UpdateFav(int key)
        {
            var myPizza = await _service.ChangeFav(key);
            if (myPizza == null)
                return BadRequest();
            return Ok(myPizza);
        }
    }
}
