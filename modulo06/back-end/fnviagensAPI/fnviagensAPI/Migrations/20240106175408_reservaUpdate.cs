using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnviagensAPI.Migrations
{
    public partial class reservaUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Reservas",
                columns: new[] { "Id", "ClienteId", "Data", "DestinoId" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(2024, 12, 3, 15, 30, 0, 0, DateTimeKind.Unspecified), 2 },
                    { 2, 2, new DateTime(2024, 2, 10, 16, 0, 0, 0, DateTimeKind.Unspecified), 3 },
                    { 3, 3, new DateTime(2024, 5, 5, 10, 0, 0, 0, DateTimeKind.Unspecified), 5 },
                    { 4, 4, new DateTime(2024, 5, 15, 11, 0, 0, 0, DateTimeKind.Unspecified), 6 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reservas",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Reservas",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Reservas",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Reservas",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
