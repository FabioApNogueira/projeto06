using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace fnviagensAPI.Models
{
    public class Reserva
    {
        [Key]
        public int Id { get; set; }

        public DateTime Data { get; set; }

        public int ClienteId { get; set; }
        
        public Cliente Cliente { get; set; }

        public int DestinoId { get; set; }

        public Destino Destino { get; set; }
    }
}
