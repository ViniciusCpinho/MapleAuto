import React from "react";
import './styles/index.scss';
import Logo from './assets/Logo.png';
import { Link } from "react-router-dom";
import routes from '../../routes';
import style from "@/config/colors/colors-config";
import { HeaderProps, HeaderState } from "./types/header";
import { setColors } from "@/config/colors/setColor";

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            colors: undefined
        };
    }

    componentDidMount(): void {
        const colors = setColors('Header')
        this.setState({ colors: colors })
        console.log('HeaderColor', colors)
    }

    private handleHover = (event) => {
        event.target.style.color = this.state.colors?.titleHover;
    };

    private handleLeave = (event) => {
        event.target.style.color = this.state.colors?.title;
    };

    renderLinks = (links) => {
        const { colors } = this.state;
    
        return links.map((link) => (
          <Link
            key={link.to}
            className="link-component"
            to={link.to}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            style={{ color: colors?.title }}
          >
            {link.label}
          </Link>
        ));
      };
    


      render() {
        const headerLinks = [
          { to: "/", label: "Comprar" },
          { to: "#", label: "Vender" },
          { to: "#", label: "Serviço" },
          { to: "#", label: "Noticias" },
          { to: "#", label: "Ajuda" },
        ];
    
        const otherLinks = [
          { to: "#", label: "Entrar" },
          { to: "#", label: "Gostei" },
          { to: "#", label: "Bate-Papo" },
        ];
    
        return (
          <header className="header" style={{ background: this.state.colors?.background }}>
            <div>
              <Link to="/">
                <img className="logo" src={Logo} alt="Logo" />
              </Link>
              {this.renderLinks(headerLinks)}
            </div>
    
            <div className="link">
              {this.renderLinks(otherLinks)}
            </div>
          </header>
        );
      }
}

export default Header;