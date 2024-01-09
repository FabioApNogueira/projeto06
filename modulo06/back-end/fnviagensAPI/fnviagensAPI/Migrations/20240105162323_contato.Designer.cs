﻿// <auto-generated />
using System;
using fnviagensAPI.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace fnviagensAPI.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20240105162323_contato")]
    partial class contato
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("fnviagensAPI.Models.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Clientes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Cpf = "789.674.789-98",
                            DataNascimento = new DateTime(1985, 3, 13, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "iri.jr@gmail.com",
                            Nome = "Irineu Júnior",
                            Senha = "123",
                            Telefone = "9 2658-5236"
                        },
                        new
                        {
                            Id = 2,
                            Cpf = "123.654.789-98",
                            DataNascimento = new DateTime(1996, 5, 23, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "maedragoes@com",
                            Nome = "Daenerys Targaryen",
                            Senha = "843",
                            Telefone = "9 8745-4789"
                        },
                        new
                        {
                            Id = 3,
                            Cpf = "987.654.789-98",
                            DataNascimento = new DateTime(1979, 7, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "cap.marvel@gmail.com",
                            Nome = "Carol Denvers",
                            Senha = "789",
                            Telefone = "9 9854-1425"
                        },
                        new
                        {
                            Id = 4,
                            Cpf = "967.257.146-23",
                            DataNascimento = new DateTime(1914, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "cap.america@gmail.com",
                            Nome = "Steve Rogers",
                            Senha = "655",
                            Telefone = "9 8945-3576"
                        });
                });

            modelBuilder.Entity("fnviagensAPI.Models.Contato", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Mensagem")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.HasKey("Id");

                    b.ToTable("Contatos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "juca@com",
                            Mensagem = "Gostaria de saber sobre minha viagem!",
                            Nome = "Juquinha de Assis"
                        },
                        new
                        {
                            Id = 2,
                            Email = "josel@com",
                            Mensagem = "Como eu posso comprar uma viagem para Fernando de Noronha?",
                            Nome = "Théo José"
                        },
                        new
                        {
                            Id = 3,
                            Email = "messi@barca.com",
                            Mensagem = "Gostaria de ser informado sobre promoções de viagens para Barcelona, por favor.",
                            Nome = "Lione Messi"
                        },
                        new
                        {
                            Id = 4,
                            Email = "mario@hotmail.com",
                            Mensagem = "Existe algum lugar incrível para eu levar a Princesa Peach?",
                            Nome = "Mário Brother"
                        });
                });

            modelBuilder.Entity("fnviagensAPI.Models.Destino", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("Imagem")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<decimal>("Valor")
                        .HasColumnType("decimal(10,2)");

                    b.HasKey("Id");

                    b.ToTable("Destinos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Descricao = "Encantadora cidade costeira no nordeste do Brasil, oferecendo praias deslumbrantes, rica herança colonial, cultura diversificada, música animada e uma cena gastronômica deliciosa.",
                            Imagem = "https://a.cdn-hotels.com/gdcs/production165/d295/de825d07-0f3f-41e6-b41b-031791c6d729.jpg",
                            Nome = "Recife",
                            Valor = 256m
                        },
                        new
                        {
                            Id = 2,
                            Descricao = "Natal é uma acolhedora cidade no nordeste do Brasil, conhecida por suas praias paradisíacas, dunas de areia, cultura folclórica, delícias culinárias típicas e festivais animados.",
                            Imagem = "https://visit.natal.br/assets/img/galeria3-min.jpg",
                            Nome = "Natal",
                            Valor = 328m
                        },
                        new
                        {
                            Id = 3,
                            Descricao = "Curitiba, capital do Paraná, é uma cidade brasileira moderna e bem planejada. Conhecida por seus parques exuberantes, arquitetura inovadora, cultura rica, gastronomia diversificada e povo acolhedor.",
                            Imagem = "https://imgmd.net/images/v1/guia/1684234/curitiba-185-c.jpg",
                            Nome = "Curitiba",
                            Valor = 358m
                        },
                        new
                        {
                            Id = 4,
                            Descricao = "Belo Horizonte, capital de Minas Gerais, encanta com sua arquitetura moderna, cultura rica e culinária deliciosa, destacando-se pelos bares e botecos típicos da região. Cidade vibrante e acolhedora.",
                            Imagem = "https://viagemeturismo.abril.com.br/wp-content/uploads/2011/09/GettyImages-1164542668.jpg",
                            Nome = "Belo Horizonte",
                            Valor = 339m
                        },
                        new
                        {
                            Id = 5,
                            Descricao = "Belém, situada na Amazônia brasileira, é uma cidade repleta de exotismo e beleza natural. Conhecida por sua rica história, gastronomia amazônica, mercados coloridos e festivais culturais envolventes.",
                            Imagem = "https://visitbrasil.com/wp-content/uploads/2021/06/Belem-do-Para-1.jpg",
                            Nome = "Belém",
                            Valor = 370m
                        },
                        new
                        {
                            Id = 6,
                            Descricao = "Noronha é um paraíso tropical no Brasil, famoso por suas praias de areias douradas, águas cristalinas, vida marinha exuberante e preservação ambiental. Destino perfeito para mergulho.",
                            Imagem = "https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg",
                            Nome = "Fernando de Noronha",
                            Valor = 596m
                        },
                        new
                        {
                            Id = 7,
                            Descricao = "Jericoacoara é um paraíso escondido no nordeste do Brasil, com dunas imponentes, praias intocadas e lagoas de águas cristalinas. Um destino paradisíaco para os amantes de natureza, esportes aquáticos e tranquilidade.",
                            Imagem = "https://blogmaladeviagem.com.br/wp-content/uploads/2023/05/jericoacoara.jpg",
                            Nome = "Jericoacoara",
                            Valor = 459m
                        },
                        new
                        {
                            Id = 8,
                            Descricao = "Alagoas é um estado encantador no nordeste do Brasil, conhecido por suas praias deslumbrantes de águas mornas e coqueirais, recifes de corais, gastronomia rica e cultura folclórica cativante. Um destino tropical imperdível.",
                            Imagem = "https://imagens.portalzuk.com.br/blog/625/63350ed3d3a1e.jpg",
                            Nome = "Alagoas",
                            Valor = 396m
                        },
                        new
                        {
                            Id = 9,
                            Descricao = "Imperatriz é uma cidade acolhedora no estado do Maranhão, Brasil. Destaca-se por sua rica cultura, festivais animados, culinária típica, parques arborizados e proximidade com belezas naturais como rios e cachoeiras.",
                            Imagem = "https://blog.123milhas.com/wp-content/uploads/2023/01/onde-se-hospedar-em-imperatriz-hoteis-e-pousadas-conexao123-2.jpg",
                            Nome = "Imperatriz",
                            Valor = 422m
                        });
                });

            modelBuilder.Entity("fnviagensAPI.Models.Reserva", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ClienteId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("DestinoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("DestinoId");

                    b.ToTable("Reservas");
                });

            modelBuilder.Entity("fnviagensAPI.Models.Reserva", b =>
                {
                    b.HasOne("fnviagensAPI.Models.Cliente", "Cliente")
                        .WithMany("Reservas")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("fnviagensAPI.Models.Destino", "Destino")
                        .WithMany("Reservas")
                        .HasForeignKey("DestinoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");

                    b.Navigation("Destino");
                });

            modelBuilder.Entity("fnviagensAPI.Models.Cliente", b =>
                {
                    b.Navigation("Reservas");
                });

            modelBuilder.Entity("fnviagensAPI.Models.Destino", b =>
                {
                    b.Navigation("Reservas");
                });
#pragma warning restore 612, 618
        }
    }
}