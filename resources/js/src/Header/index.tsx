import React from "react";
import './styles/index.scss';
import Logo from './assets/Logo.png';
import { Link } from "react-router-dom";
import { HeaderProps, HeaderState } from "./types/header";
import { setColors } from "@/config/colors/setColor";
import Filtro from "./Filtro";
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
    
        const otherLinks = [
          { to: "#", label: "Entrar" },
          { to: "#", label: "Gostei" },
          { to: "#", label: "Bate-Papo" },
        ];
    
        return (
          <header 
            className="header" 
            style={{ 
              background: this.state.colors?.background, 
              borderBottomColor: this.state.colors?.border,
              borderBottomWidth: 2,
            }}
          >
            <div>
              <div className="header-logo-background"
                style={{
                  backgroundColor: this.state.colors?.logo,
                  borderWidth: 2,
                  borderColor: this.state.colors?.logoBorder
                }}
              >
                <div className="header-logo-background-line"></div>
                <Link to="/">
                  <img 
                    style={{
                      // backgroundColor: this.state.colors?.logo,
                      // borderWidth: 2,
                      // borderColor: this.state.colors?.logoBorder
                    }} 
                    className="header-logo" 
                    src={Logo} 
                  />
              </Link>
              </div>
              
            </div>

        
              {/* <Filtro/> */}
    
            <div className="link">
              {this.renderLinks(otherLinks)}
            </div>
          </header>
        );
      }
}

export default Header;