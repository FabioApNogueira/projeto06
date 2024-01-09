using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fnviagensAPI.Migrations
{
    public partial class destinos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "Descricao", "Imagem", "Nome", "Valor" },
                values: new object[,]
                {
                    { 2, "Natal é uma acolhedora cidade no nordeste do Brasil, conhecida por suas praias paradisíacas, dunas de areia, cultura folclórica, delícias culinárias típicas e festivais animados.", "https://visit.natal.br/assets/img/galeria3-min.jpg", "Natal", 328m },
                    { 3, "Curitiba, capital do Paraná, é uma cidade brasileira moderna e bem planejada. Conhecida por seus parques exuberantes, arquitetura inovadora, cultura rica, gastronomia diversificada e povo acolhedor.", "https://imgmd.net/images/v1/guia/1684234/curitiba-185-c.jpg", "Curitiba", 358m },
                    { 4, "Belo Horizonte, capital de Minas Gerais, encanta com sua arquitetura moderna, cultura rica e culinária deliciosa, destacando-se pelos bares e botecos típicos da região. Cidade vibrante e acolhedora.", "https://viagemeturismo.abril.com.br/wp-content/uploads/2011/09/GettyImages-1164542668.jpg", "Belo Horizonte", 339m },
                    { 5, "Belém, situada na Amazônia brasileira, é uma cidade repleta de exotismo e beleza natural. Conhecida por sua rica história, gastronomia amazônica, mercados coloridos e festivais culturais envolventes.", "https://visitbrasil.com/wp-content/uploads/2021/06/Belem-do-Para-1.jpg", "Belém", 370m },
                    { 6, "Noronha é um paraíso tropical no Brasil, famoso por suas praias de areias douradas, águas cristalinas, vida marinha exuberante e preservação ambiental. Destino perfeito para mergulho.", "https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg", "Fernando de Noronha", 596m },
                    { 7, "Jericoacoara é um paraíso escondido no nordeste do Brasil, com dunas imponentes, praias intocadas e lagoas de águas cristalinas. Um destino paradisíaco para os amantes de natureza, esportes aquáticos e tranquilidade.", "https://blogmaladeviagem.com.br/wp-content/uploads/2023/05/jericoacoara.jpg", "Jericoacoara", 459m },
                    { 8, "Alagoas é um estado encantador no nordeste do Brasil, conhecido por suas praias deslumbrantes de águas mornas e coqueirais, recifes de corais, gastronomia rica e cultura folclórica cativante. Um destino tropical imperdível.", "https://imagens.portalzuk.com.br/blog/625/63350ed3d3a1e.jpg", "Alagoas", 396m },
                    { 9, "Imperatriz é uma cidade acolhedora no estado do Maranhão, Brasil. Destaca-se por sua rica cultura, festivais animados, culinária típica, parques arborizados e proximidade com belezas naturais como rios e cachoeiras.", "https://blog.123milhas.com/wp-content/uploads/2023/01/onde-se-hospedar-em-imperatriz-hoteis-e-pousadas-conexao123-2.jpg", "Imperatriz", 422m }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Destinos",
                keyColumn: "Id",
                keyValue: 9);
        }
    }
}
