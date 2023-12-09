using Postgrest.Models;

namespace WebAppApi.Models
{
    public class Objects : BaseModel
    {
        public int StructureID { get; set; }
        public int CodeID { get; set; }
        public string StructureName { get; set; }
        public string StructureDescription { get; set; }
    }
}
