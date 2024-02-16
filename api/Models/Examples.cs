using Postgrest.Attributes;
using Postgrest.Models;

namespace WebAppApi.Models
{
    [Table("Examples")]
    public class Examples : BaseModel
    {
        public int CodeID { get; set; }
        public string Language { get; set; }
        public string Example { get; set; }
    }
}
