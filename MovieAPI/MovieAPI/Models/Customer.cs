using System.ComponentModel.DataAnnotations;

namespace MovieAPI.Models
{
    public class Customer
    {
        [Required]
        public int Id { get; set; }
        [StringLength(3)]
        public string Name { get; set; }
        [RegularExpression("[0-9][0-9]*")]
        public string Phone { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public string City { get; set; }
    }
}
