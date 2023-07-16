import React from "react";
import './style/index.css'
import Logo from './assets/Logo.png'
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   };
    }
    render() { 
        return (
            <header className="header">
                
                <div>
                    <Link to="/">
                        <img className="logo" src={Logo}/>
                    </Link>
                </div>

                <div>
                    <Link className="link-component" to='#'>Comprar</Link>
                    <Link className="link-component" to='#'>Vender</Link>
                    <Link className="link-component" to='#'>Serviço</Link>
                    <Link className="link-component" to='#'>Noticias</Link>
                    <Link className="link-component" to='#'>Ajuda</Link>
                </div>

                <div className="link">
                    <Link className="link-component" to='#'>Entrar</Link>
                    <Link className="link-component" to='#'>Gostei</Link>
                    <Link className="link-component" to='#'>Bate-Papo</Link>
                </div>
            </header>   
        );
    }
}
 
export default Header;