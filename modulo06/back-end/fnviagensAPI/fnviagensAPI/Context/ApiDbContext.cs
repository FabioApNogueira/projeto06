using Microsoft.EntityFrameworkCore;

namespace fnviagensAPI.Context
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<Contato> Contatos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("DefaultConnection")
                              .UseLazyLoadingProxies()
                              .EnableSensitiveDataLogging();

                EnsureDatabaseCreated();
            }
        }

        private void EnsureDatabaseCreated()
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ApplySeedConfigurations(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        private static void ApplySeedConfigurations(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new SeedDataConfiguration())
                        .ApplyConfiguration(new SeedDataConfigurationCliente())
                        .ApplyConfiguration(new SeedDataConfigurationContato())
                        .ApplyConfiguration(new SeedDataReserva());
        }
    }
}
