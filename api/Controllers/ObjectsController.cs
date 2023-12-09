using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using WebAppApi.Models;

namespace WebAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ObjectsController : ControllerBase
    {
        private readonly string _connectionString;

        public ObjectsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("SupabaseConnection");
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var objects = new List<Objects>();
                var url = Environment.GetEnvironmentVariable("SupabaseURL");
                var key = Environment.GetEnvironmentVariable("SupabaseAnonKey");

                var options = new Supabase.SupabaseOptions
                {
                    AutoConnectRealtime = true
                };

                var supabase = new Supabase.Client(url, key, options);
                var result = await supabase.From<Objects>().Get();
                objects = result.Models.ToList();
                
                return Ok(objects);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

    }
}
