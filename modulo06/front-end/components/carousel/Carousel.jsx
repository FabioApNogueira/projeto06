import React from 'react';

export default function CustomCarousel() {
    return (
        <div id="customCarousel" className="custom-carousel slide custom-carousel-fade">
            <div className="custom-carousel-indicators">
                {[0, 1, 2].map(index => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#customCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="custom-carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index} className={`custom-carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.imageSrc} className="d-block w-100" alt={item.altText} />
                        <div className="custom-carousel-caption d-none d-md-block">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="custom-carousel-control-prev"
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide="prev"
            >
                <span className="custom-carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="custom-carousel-control-next"
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide="next"
            >
                <span className="custom-carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

const carouselItems = [
    {
        imageSrc: 'imagens/capa1.jpg',
        altText: 'Foto de três indivíduos em viagem, carregando mochilas nas costas e pausados para hidratação.',
        title: 'Descubra destinos memoráveis que estão à espera para serem explorados.',
        description: 'Aproveite grandes economias por meio das mais vantajosas ofertas disponíveis para suas viagens.',
    },
    {
        imageSrc: 'imagens/capa01.jpg',
        altText: 'Visão de uma estrada ladeada por montanhas cobertas de gelo à esquerda e um sereno lago à direita, sob um céu tingido de tons alaranjados durante a noite.',
        title: 'Este é o ponto de partida para experiências incríveis e emocionantes aventuras.',
        description: 'Jornadas que despertam a essência da sua alma e enriquecem o seu intelecto.',
    },
    {
        imageSrc: 'imagens/capa4.jpg',
        altText: 'Foto de um indivíduo caminhando pelo campo, mochila nas costas, enquanto um avião corta os céus ao fundo.',
        title: 'Explore a magia que o mundo tem a oferecer.',
        description: 'Experiências que deixam memórias eternas em sua jornada.',
    },
];
