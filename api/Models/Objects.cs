using Postgrest.Attributes;
using Postgrest.Models;

namespace WebAppApi.Models
{
    [Table("Objects")]
    public class Objects : BaseModel
    {
        public int StructureID { get; set; }
        public int CodeID { get; set; }
        public string? StructureName { get; set; }
        public string? StructureDescription { get; set; }
    }
}
