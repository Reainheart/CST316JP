using Postgrest.Models;

namespace WebAppApi.Models
{
    public class Examples : BaseModel
    {
        public int CodeID { get; set; }
        public string Language { get; set; }
        public string Example { get; set; }
    }
}
