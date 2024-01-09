using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnviagensAPI.Migrations
{
    public partial class usuarios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Clientes",
                columns: new[] { "Id", "Cpf", "DataNascimento", "Email", "Nome", "Senha", "Telefone" },
                values: new object[,]
                {
                    { 1, "789.674.789-98", new DateTime(1985, 3, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "iri.jr@gmail.com", "Irineu Júnior", "123", "9 2658-5236" },
                    { 2, "123.654.789-98", new DateTime(1996, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), "maedragoes@com", "Daenerys Targaryen", "843", "9 8745-4789" },
                    { 3, "987.654.789-98", new DateTime(1979, 7, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "cap.marvel@gmail.com", "Carol Denvers", "789", "9 9854-1425" },
                    { 4, "967.257.146-23", new DateTime(1914, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "cap.america@gmail.com", "Steve Rogers", "655", "9 8945-3576" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Clientes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Clientes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Clientes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Clientes",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
