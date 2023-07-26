import React, { Component } from "react";
import './styles/filtro.scss'
 
class Filtro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (
            <section className="filtro">
                <div className="filtro-nomes">
                </div>
                <div className="filtro-barra-de-pesquisa">
                    <form action="#" className="filtro-form">
                        <input className="filtro-input" type="text" name="" id="" placeholder="Faça uma pesquisa!" />
                        <input className="filtro-botao" type="button" value="Enviar" />
                    </form>
                </div>
            </section>
         );
    }
}
 
export default Filtro;