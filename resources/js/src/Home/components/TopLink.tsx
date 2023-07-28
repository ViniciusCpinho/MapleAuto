import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TopLinkProps, linkProps, TopLinkState } from "./types/topLink";
import { setColors } from "@/config/colors/setColor";
import './styles/TopLink.scss'


class TopLink extends React.Component<TopLinkProps, TopLinkState> {
    constructor(props: TopLinkProps) {
        super(props);
        this.state = {
            colors: undefined,
        };
    }

    componentDidMount(): void {
        const colors = setColors('Header')
        this.setState({ colors: colors })
    }

    private handleHover = (event) => {
        event.target.style.color = this.state.colors?.titleHover;
    };

    private handleLeave = (event) => {
        event.target.style.color = this.state.colors?.toplinkText;
    };

    render() {

        const links = [
            { rota: '/comprar', nome: 'Comprar' },
            { rota: '/vender', nome: 'Vender' },
            { rota: '/financiamneto', nome: 'Financiamento' },
            { rota: '/servico', nome: 'Serviço' },
        ]

        return (
            <section className="toplink">
                {links.map((link) => (
                    <Link
                        key={link.rota}
                        className="toplink-text"
                        to={link.rota}
                        onMouseEnter={this.handleHover}
                        onMouseLeave={this.handleLeave}
                        style={{ color: this.state.colors?.toplinkText }}
                    >
                        {link.nome}
                    </Link>
                ))}
            </section>
        );
    }
}

export default TopLink;