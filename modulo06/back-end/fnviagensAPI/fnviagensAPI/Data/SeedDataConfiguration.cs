using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using fnviagensAPI.Models;

namespace fnviagensAPI.Data
{
    public class SeedDataConfiguration : IEntityTypeConfiguration<Destino>
    {
        public void Configure(EntityTypeBuilder<Destino> builder)
        {           
            builder.HasData(
                new Destino 
                {
                    Id = 1,
                    Nome = "Recife",
                    Valor = 305,
                    Descricao = "Uma cidade costeira encantadora no nordeste do Brasil, que oferece praias deslumbrantes, uma herança colonial rica, uma cultura diversificada, música animada e uma cena gastronômica deliciosa.",
                    Imagem = "https://a.cdn-hotels.com/gdcs/production165/d295/de825d07-0f3f-41e6-b41b-031791c6d729.jpg"
                },
                new Destino 
                { 
                    Id = 2,
                    Nome = "Natal",
                    Valor = 290,
                    Descricao = "Natal é uma cidade acolhedora no nordeste do Brasil, conhecida por suas praias paradisíacas, dunas de areia, cultura folclórica, delícias culinárias típicas e festivais animados.",
                    Imagem = "https://visit.natal.br/assets/img/galeria3-min.jpg"
                },
            );
        }
    }

    public class SeedDataConfigurationCliente : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.HasData(
                new Cliente { Id = 1, Nome = "Luciana Oliveira", Senha = "abc123", Email = "luciana.oliveira@example.com", Cpf = "123.456.789-01", Telefone = "9 8765-4321", DataNascimento = DateTime.Parse("1990-08-21") },
                new Cliente { Id = 2, Nome = "Fernando Souza", Senha = "xyz789", Email = "fernando.souza@example.com", Cpf = "234.567.890-12", Telefone = "9 7654-3210", DataNascimento = DateTime.Parse("1988-04-15") },
            );
        }
    }

    public class SeedDataConfigurationContato : IEntityTypeConfiguration<Contato>
    {
        public void Configure(EntityTypeBuilder<Contato> builder)
        {
            builder.HasData(
                new Contato { Id = 1, Nome = "Ana Souza", Email = "ana@example.com", Mensagem = "Tenho dúvidas sobre meu próximo voo." },
                new Contato { Id = 2, Nome = "Lucas Oliveira", Email = "lucas@example.com", Mensagem = "Gostaria de informações sobre destinos de lua de mel." },
            );
        }
    }
}
