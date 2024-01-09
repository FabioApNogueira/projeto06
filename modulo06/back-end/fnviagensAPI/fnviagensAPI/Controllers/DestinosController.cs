using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fnviagensAPI.Context;
using fnviagensAPI.Models;

namespace fnviagensAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinosController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public DestinosController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Destino>> ObterDestinos()
        {
            return await _context.Destinos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destino>> ObterDestinoPorId(int id)
        {
            var destino = await _context.Destinos.FindAsync(id);

            return destino != null ? destino : NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarDestino(int id, Destino destino)
        {
            if (id != destino.Id)
            {
                return BadRequest();
            }

            _context.Entry(destino).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DestinoExiste(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Destino>> CriarDestino(Destino destino)
        {
            _context.Destinos.Add(destino);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(ObterDestinoPorId), new { id = destino.Id }, destino);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> ExcluirDestino(int id)
        {
            var destino = await _context.Destinos.FindAsync(id);
            if (destino == null)
            {
                return NotFound();
            }

            _context.Destinos.Remove(destino);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DestinoExiste(int id)
        {
            return _context.Destinos.Any(e => e.Id == id);
        }
    }
}
