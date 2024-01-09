import React from 'react';
import Head from 'next/head';

export default function Promocoes() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>FnViagens - Promoções</title>
      </Head>

      <main>
        <div className="position-relative overflow-hidden text-center ">
          <img
            className="capinha card-img-top"
            src="imagens/capa2.jpg"
            alt="Imagem de um homem parado de costas, com mochila de viagem observando as montanhas."
          />
          <div className="col-md-5 p-lg-3 mx-auto my-0">
            <h3 className="display-4 font-weight-normal">Explore o mundo!</h3>
            <p className="lead font-weight-normal">
              Promoções internacionais.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Saiba mais
            </a>
          </div>
        </div>
        <div className="row m-2" id="viagens">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="imagens/uruguai.jpg"
                  alt="Imagem de Uruguai"
                />
                <h5 className="card-title m-0 text-center">Uruguai</h5>
                <small>a partir de:</small>
                <p className="h5 m-0 p-0 ">R$ 500</p>
                <small>Apenas Ida</small>
                <p className="card-text">
                O Uruguai, na América do Sul, encanta com suas praias deslumbrantes, cidades históricas e cultura acolhedora. Explore Montevidéu, a capital charmosa e querida, com arquitetura colonial e vida noturna vibrante. Ou desfrute das belas praias de Punta del Este, descobrindo a rica herança cultural do país por meio de música, dança e culinária deliciosa.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="imagens/londres.jpg"
                  alt="Imagem de Londres"
                />
                <h5 className="card-title m-0 text-center">Inglaterra</h5>
                <small>a partir de:</small>
                <p className="h5 m-0 p-0 ">R$ 3.500</p>
                <small>Apenas Ida</small>
                <p className="card-text">
                A Inglaterra encanta com sua rica história e cultura vibrante. Explore pontos icônicos de Londres, como o Big Ben e o Buckingham Palace, mergulhe na história em Stonehenge e descubra paisagens rurais pitorescas em Cotswolds. Uma viagem à Inglaterra é inesquecível e maravilhosa para amantes de arte e tradições milenares.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-sm-6 ">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="imagens/argentina.jpg"
                  alt="Imagem da Argentina"
                />
                <h5 className="card-title m-0 text-center">Argentina</h5>
                <small>a partir de:</small>
                <p className="h5 m-0 p-0 ">R$ 800</p>
                <small>Apenas Ida</small>
                <p className="card-text">
                A Argentina cativa com suas paisagens impressionantes, cultura rica e gastronomia única. Em Buenos Aires, explore os envolventes tangos e a arquitetura europeia. Delicie-se com a carne assada e os renomados vinhos argentinos, mergulhando na calorosa hospitalidade do povo argentino.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="imagens/chile.jpg"
                  alt="Imagem do Chile"
                />
                <h5 className="card-title m-0 text-center">Chile</h5>
                <small>a partir de:</small>
                <p className="h5 m-0 p-0 ">R$ 900</p>
                <small>Apenas Ida</small>
                <p className="card-text">
                O Chile, na América do Sul, impressiona com sua diversidade de paisagens. Descubra o deserto do Atacama, o mais árido do mundo, com paisagens lunares e lagoas de sal. Explore as majestosas montanhas dos Andes, perfeitas para esportes de inverno. Com uma cultura rica e um povo acolhedor, o Chile proporciona uma experiência fascinante para os viajantes que buscam a extraordinária beleza natural.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
