using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PortfolioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PortfolioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/portfolio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Portfolio>>> GetPortfolio()
        {
            var portfolio = await _context.Portfolio.ToListAsync();

            return Ok(portfolio);
        }

        // POST: api/portfolio
        [HttpPost]
        public async Task<ActionResult<Portfolio>> CreatePortfolio(
            Portfolio portfolio)
        {
            _context.Portfolio.Add(portfolio);

            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetPortfolio),
                new { id = portfolio.Id },
                portfolio
            );
        }

        // GET: api/portfolio/export
        [HttpGet("export")]
        public async Task<IActionResult> ExportPortfolio()
        {
            var portfolio = await _context.Portfolio.ToListAsync();

            var json = System.Text.Json.JsonSerializer.SerializeToUtf8Bytes(
                portfolio
            );

            return File(
                json,
                "application/json",
                "portfolio.json"
            );
        }
    }
}