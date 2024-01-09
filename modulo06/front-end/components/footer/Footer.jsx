import React from 'react';

export default function CustomFooter() {
    return (
        <footer>
            <img
                src="imagens/fnviagens.png"
                alt="Logo da FnViagens"
            />

            <div className="secure-purchase">
                <strong>FAÇA SUA COMPRA COM SEGURANÇA</strong>
                <a href="billing.html">Faturamento</a>
                <a href="contact.html">Entre em Contato</a>
                <a href="promotions.html">Black Friday</a>
            </div>
            <div className="contact-info">
                <strong>INFORMAÇÕES DE CONTATO</strong>
                <span>
                    <i className="ph ph-phone" /> 00 0000-0000
                </span>
                <span>
                    <i className="ph ph-at" /> contato@fnviagens.com
                </span>
                <span>
                    <i className="ph ph-map-pin" /> Rua BRASIL, s/n
                </span>
            </div>
            <div className="social-media">
                <strong>REDES SOCIAIS</strong>
                <div>
                    <span>
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="ph ph-instagram-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <i className="ph ph-twitter-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com" target="_blank">
                            <i className="ph ph-github-logo" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
