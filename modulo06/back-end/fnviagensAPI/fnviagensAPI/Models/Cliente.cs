using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace fnviagensAPI.Models
{
    [Table("Clientes")]
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        [StringLength(60, ErrorMessage = "O campo Nome deve conter no máximo 60 caracteres")]
        [MinLength(3, ErrorMessage = "O campo Nome deve conter no mínimo 3 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório")]
        [StringLength(20)]
        public string Senha { get; set; }

        [Required(ErrorMessage = "O campo Email é obrigatório")]
        [StringLength(50)]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo CPF é obrigatório")]
        [StringLength(20)]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "O campo Telefone é obrigatório")]
        [StringLength(20)]
        public string Telefone { get; set; }

        public DateTime DataNascimento { get; set; }

        [JsonIgnore]
        public List<Reserva> Reservas { get; set; }
    }
}
