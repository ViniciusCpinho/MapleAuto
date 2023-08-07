import React, { Component } from "react";
import { TipoProps, TipoState } from "./types/Tipo";
import './styles/Tipo.scss'
import { LogoMarcas } from "@/assets/Logos";
import { ImageCorpo } from "@/assets/Corpo";

class Tipo extends React.Component<TipoProps, TipoState>{
   constructor(props: TipoProps){
    super(props);
    this.state = {
        corpo: false,
        modelo: false,
        marca: true,
        preco: false,
    }
   }

   renderMarca(){
        return(
            <div className="tipo-marca">
            {LogoMarcas.map(logo => {
                return(
                        <div className="tipo-marca-logo">
                            <img className="tipo-marca-logo-image" src={logo.path} alt="" />
                            <p className="tipo-marca-logo-text">{logo.name}</p>
                        </div>
                )
            })}
            </div>
        )
   }

   renderCorpo(){
        return(
            <div className="tipo-corpo">
                {/* {ImageCorpo.map(corpo => { */}
                    {/* return( */}
                        <div className="tipo-corpo-logo">
                            <img className="tipo-corpo-logo-image" src={ImageCorpo[0].path} alt="" />
                            <p className="tipo-corpo-logo-text">{ImageCorpo[0].name}</p>
                        </div>
                        <div className="tipo-corpo-logo">
                            <img className="tipo-corpo-logo-image" src={ImageCorpo[0].path} alt="" />
                            <p className="tipo-corpo-logo-text">{ImageCorpo[0].name}</p>
                        </div>
                        <div className="tipo-corpo-logo">
                            <img className="tipo-corpo-logo-image" src={ImageCorpo[0].path} alt="" />
                            <p className="tipo-corpo-logo-text">{ImageCorpo[0].name}</p>
                        </div>
                        <div className="tipo-corpo-logo">
                            <img className="tipo-corpo-logo-image" src={ImageCorpo[0].path} alt="" />
                            <p className="tipo-corpo-logo-text">{ImageCorpo[0].name}</p>
                        </div>
                    {/* ) */}
                {/* })} */}
            </div>
        )
   }

   renderMolelo(){
        return(
            <div className="tipo-modelo">
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
                <div className="tipo-modelo-item">
                    <p className="tipo-modelo-text">Ford:Ranger</p>
                    <span className="tipo-modelo-subtext">(8)</span>
                </div>
            </div>
        )
   }

   renderPreco(){
    return(
        <div className="tipo-preco">
            <div className="tipo-preco-item">
                <p className="tipo-preco-text">20.000</p>
                <span className="tipo-preco-subtext">total(0)</span>
            </div>
            <div className="tipo-preco-item">
                <p className="tipo-preco-text">20.000</p>
                <span className="tipo-preco-subtext">total(0)</span>
            </div>
            <div className="tipo-preco-item">
                <p className="tipo-preco-text">20.000</p>
                <span className="tipo-preco-subtext">total(0)</span>
            </div>
            <div className="tipo-preco-item">
                <p className="tipo-preco-text">20.000</p>
                <span className="tipo-preco-subtext">total(0)</span>
            </div>
        </div>
    )
   }

   render(): React.ReactNode {
        const { marca, corpo, modelo, preco } = this.state;

       return(
        <section className="tipo">
            <p className="tipo-text">Encontre o melhor para você</p>
            <div className="tipo-selection">
                <div 
                    className="tipo-selection-item" 
                    onClick={() => this.setState({marca: true, corpo: false, modelo: false, preco: false})}
                >
                    Marca
                </div>
                <div 
                    className="tipo-selection-item"
                    onClick={() => this.setState({marca: false, corpo: true, modelo: false, preco: false})}
                >
                    Corpo
                </div>
                <div 
                    className="tipo-selection-item"
                    onClick={() => this.setState({marca: false, corpo: false, modelo: false, preco: true})}
                >
                    Preço
                </div>
                <div 
                    className="tipo-selection-item"
                    onClick={() => this.setState({marca: false, corpo: false, modelo: true, preco: false})}
                >
                    Modelo
                </div>
            </div>
            {marca && (this.renderMarca())}
            {corpo && (this.renderCorpo())}
            {preco && (this.renderPreco())}
            {modelo && (this.renderMolelo())}
        </section>
       )
   }
}

export default Tipo;