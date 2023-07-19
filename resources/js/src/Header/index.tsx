import React from "react";
import './styles/index.scss';
import Logo from './assets/Logo.png';
import { Link } from "react-router-dom";
import routes from '../../routes';
import style from '../../assets/colors-config'
import { HeaderProps, HeaderState } from "./types/header";

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props:HeaderProps) {
        super(props);
        this.state = { 
            background: '#FFF',
            titleHover: '#FFF' 
        };
    }

    componentDidMount(): void {
        let color
        if(style.headerBackGround.length > 1){
            color = `linear-gradient(${style.headerDegree}deg, ${style.headerBackGround.join(', ')})`;
        }else{
            color = style.headerBackGround
        }

        const titleHover = style.headerLinkHover

        this.setState({ background: color, titleHover: titleHover})
    }

    private handleHover = (event) => {
        event.target.style.color = style.headerLinkHover;
      };
    
    private handleLeave = (event) => {
        event.target.style.color = style.headerLink;
      };


    render() { 
        return (
            <header style={{ background: this.state.background}} className="header">
                    <div style={{ color: style.headerLink }}>
                        <Link to="/">
                            <img className="logo" src={Logo}/>
                        </Link>
                        <Link
                            className="link-component"
                            to={routes.Contact.route}
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}
                        >
                        Comprar
                        </Link>

                        <Link
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}
                        >
                        Vender
                        </Link>
                        <Link
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}
                        >
                        Serviço
                        </Link>
                        <Link
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}
                        >
                        Noticias
                        </Link>
                        <Link
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}
                        >
                        Ajuda
                        </Link>
                    </div>

                    <div className="link" style={{ color: style.headerLink }}>
                        <Link 
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}                        
                        >
                            Entrar
                        </Link>
                        <Link 
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}                        
                        >
                            Gostei
                        </Link>
                        <Link 
                            className="link-component"
                            to="#"
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeave}                        
                        >
                            Bate-Papo
                        </Link>
                    </div>
            </header>   
        );
    }
}
 
export default Header;