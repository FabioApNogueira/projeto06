using fnviagensAPI.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace fnviagensAPI.Data
{
    public class SeedDataReserva : IEntityTypeConfiguration<Reserva>
    {
        public void Configure(EntityTypeBuilder<Reserva> builder)
        {
            var reservas = new[]
            {
                new Reserva { Id = 1, ClienteId = 1, DestinoId = 2, Data = DateTime.Parse("2024-12-03T15:30:00") },
                new Reserva { Id = 2, ClienteId = 2, DestinoId = 3, Data = DateTime.Parse("2024-02-10T16:00:00") },
                new Reserva { Id = 3, ClienteId = 3, DestinoId = 5, Data = DateTime.Parse("2024-05-05T10:00:00") },
                new Reserva { Id = 4, ClienteId = 4, DestinoId = 6, Data = DateTime.Parse("2024-05-15T11:00:00") }
            };

            builder.HasData(reservas);
        }
    }
}
