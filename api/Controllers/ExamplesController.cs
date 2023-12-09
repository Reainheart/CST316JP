using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using WebAppApi.Models;


namespace WebAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamplesController : ControllerBase
    {
        private readonly string _connectionString;

        public ExamplesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("SupabaseConnection");
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var examples = new List<Examples>();

                var url = Environment.GetEnvironmentVariable("SupabaseURL");
                var key = Environment.GetEnvironmentVariable("SupabaseAnonKey");

                var options = new Supabase.SupabaseOptions
                {
                    AutoConnectRealtime = true
                };

                var supabase = new Supabase.Client(url, key, options);
                var result = await supabase.From<Examples>().Get();
                examples = result.Models.ToList();

                return Ok(examples);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }
    }
}
