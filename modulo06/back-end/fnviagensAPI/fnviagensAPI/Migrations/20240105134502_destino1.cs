using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnviagensAPI.Migrations
{
    public partial class destino1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Clientes",
                type: "varchar(60)",
                maxLength: 60,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(80)",
                oldMaxLength: 80)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "Descricao", "Imagem", "Nome", "Valor" },
                values: new object[] { 1, "Encantadora cidade costeira no nordeste do Brasil, oferecendo praias deslumbrantes, rica herança colonial, cultura diversificada, música animada e uma cena gastronômica deliciosa.", "https://a.cdn-hotels.com/gdcs/production165/d295/de825d07-0f3f-41e6-b41b-031791c6d729.jpg", "Recife", 256m });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "Clientes",
                type: "varchar(80)",
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(60)",
                oldMaxLength: 60)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
