namespace PIzzaAPI.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Likes { get; set; }
        public bool IsFav { get; set; }
        public string? Pic { get; set; }
        public float Price { get; set; }
    }
}
