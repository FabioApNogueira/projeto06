using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnviagensAPI.Migrations
{
    public partial class contato : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Contatos",
                columns: new[] { "Id", "Email", "Mensagem", "Nome" },
                values: new object[,]
                {
                    { 1, "juca@com", "Gostaria de saber sobre minha viagem!", "Juquinha de Assis" },
                    { 2, "josel@com", "Como eu posso comprar uma viagem para Fernando de Noronha?", "Théo José" },
                    { 3, "messi@barca.com", "Gostaria de ser informado sobre promoções de viagens para Barcelona, por favor.", "Lione Messi" },
                    { 4, "mario@hotmail.com", "Existe algum lugar incrível para eu levar a Princesa Peach?", "Mário Brother" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contatos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Contatos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Contatos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Contatos",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
