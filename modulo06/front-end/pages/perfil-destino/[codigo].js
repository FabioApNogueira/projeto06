import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useDestino } from "@/hooks/useDestino";
import Head from 'next/head'
import Link from 'next/link'

const UpdateDestino = () => {
  const { destino, buscarDestino } = useDestino()
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    buscarDestino(codigo)
  }, [codigo]);

  const renderComentario = (usuario, titulo, comentario) => (
    <div className="col">
      <div className="card" style={{ minHeight: 200 }}>
        <div className="card-body">
          <h5 className="card-title">{usuario}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{titulo}</h6>
          <p className="card-text">{comentario}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        {/* ... (código do Head) */}
      </Head>

      <div className="carousel-inner">
        {/* ... (código do carrossel) */}
      </div>

      <main className="text-center">
        <section className="container p-2 card mt-3 mb-3">
          <h1 className="display-4 font-weight-normal text-center">Conheça {destino.nome}!</h1>
          <div className="row g-2">
            {/* ... (código dos detalhes) */}
          </div>
          <div className="d-grid mb-2">
            <Link href="/add-reserva" className="btn btn-primary">
              Reservar
            </Link>
          </div>
          <img className="img-fluid rounded" src={destino.imagem} alt="" />
        </section>

        <section className="container card p-4 mb-3" id="comentarios">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Comentários sobre <strong>{destino.nome}</strong></h4>
            <div className="stars">
              <i className="star bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-3">
            {renderComentario("Usuário", "Viagem maravilhosa!", "Comprei essa viagem por um valor baixíssimo! Valeu a pena a experiência, foi única! Obrigado, Destino Certo! Com certeza, comprarei mais viagens no site.")}
            {renderComentario("Usuário", "Viagem Transformadora!", "Caramba! Sabe aquele filme 'Comer, Rezar e Amar'? Eu não imaginava o quanto essa viagem iria ajudar a me encontrar. Obrigado, Destino Certo.. por me ajudar a achar essa viagem que mudou a minha vida!")}
          </div>
        </section>
      </main>
    </>
  );
};

export default UpdateDestino;
