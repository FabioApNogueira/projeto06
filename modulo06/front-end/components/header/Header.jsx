import React from 'react';
import Link from 'next/link';

export default function CustomHeader() {
    return (
        <header>
            <nav className="custom-navbar custom-navbar-expand-md custom-navbar-dark">
                <div className="custom-container-fluid">
                    <Link className="custom-navbar-brand" href="/">
                        <img
                            src="imagens/fnviagens.png"
                            alt="Logo da FnViagens"
                        />
                    </Link>
                    <button
                        className="custom-navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#customNavbar"
                        aria-controls="customNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="custom-navbar-toggler-icon" />
                    </button>
                    <div className="custom-collapse custom-navbar-collapse" id="customNavbar">
                        <ul className="custom-navbar-nav">
                            {navLinks.map((link, index) => (
                                <li className="custom-nav-item" key={index}>
                                    <Link className="custom-nav-link" aria-current="page" href={link.path}>
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <hr className="custom-group-divider" />
                        <div className="custom-dropdown ms-2">
                            <button
                                className="btn btn-outline-light btn-fundo custom-dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Admin
                            </button>
                            <ul className="custom-dropdown-menu custom-dropdown-menu-end">
                                {adminLinks.map((adminLink, index) => (
                                    <li key={index}>
                                        <Link className="custom-dropdown-item custom-dropdown-link" href={adminLink.path}>
                                            {adminLink.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const navLinks = [
    {
        path: '/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
        ),
        label: 'Home',
    },
    {
        path: '/promocoes',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5-5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
            </svg>
        ),
        label: 'Promoções',
    },
    {
        path: 'faleconosco',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
            </svg>
        ),
        label: 'Fale Conosco',
    },
    {
        path: '/entrar',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
        ),
        label: 'Entrar',
    },
];

const adminLinks = [
    { path: '/cliente', label: 'Clientes' },
    { path: '/destino', label: 'Destinos' },
    { path: '/reserva', label: 'Reservas' },
    { path: '/contato', label: 'Contato' },
];
