using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;
using System.Text.Json.Serialization;

namespace fnviagensAPI.Models
{
    [Table("Destinos")]
    public class Destino
    {
        public Destino()
        {
            Reservas = new Collection<Reserva>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(80)]
        public string Nome { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Valor { get; set; }

        [Required]
        [StringLength(300)]
        public string Descricao { get; set; }

        [Required]
        [StringLength(300)]
        public string Imagem { get; set; }

        [JsonIgnore]
        public ICollection<Reserva> Reservas { get; set; }
    }
}
