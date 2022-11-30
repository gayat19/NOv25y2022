using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PIzzaAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pizzas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Likes = table.Column<int>(type: "int", nullable: false),
                    IsFav = table.Column<bool>(type: "bit", nullable: false),
                    Pic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pizzas", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Pizzas",
                columns: new[] { "Id", "IsFav", "Likes", "Name", "Pic", "Price" },
                values: new object[] { 101, true, 0, "Cheese Overloaded", "assets/images/Pic1.jpg", 275.3f });

            migrationBuilder.InsertData(
                table: "Pizzas",
                columns: new[] { "Id", "IsFav", "Likes", "Name", "Pic", "Price" },
                values: new object[] { 102, false, 0, "Veg Extravanganza", "assets/images/Pic2.jpg", 450.75f });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pizzas");
        }
    }
}
