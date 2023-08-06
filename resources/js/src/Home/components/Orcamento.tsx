import React, { Component } from "react";
import './styles/orcamento.scss'
import { Image } from "../assets";
import logo from '../../../assets/Logo.png'
import { OrcamentoProps, OrcamentoState } from "./types/Orcamento";

class Orcamento extends React.Component<OrcamentoProps, OrcamentoState> {
    constructor(props:OrcamentoProps) {
        super(props);
        this.state = { 
            width: undefined,
            height: undefined,
         };
    }

    componentDidMount() {
        const width = window.innerWidth - 18
        const height = (width * (70 / 100));
        this.setState({ width: width, height: height })

    }

    
    render() {
        return (
            <section 
                className="orcamento"
                style={{
                    width: this.state.width,
                    height: this.state.height
                }}
            >
                <div className="orcamento-sombra"/>
                <img className="orcamento-image" src={Image.ImageBackground} alt="" />

                <div className="orcamento-container">
                    <div className="orcamento-container-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p className="orcamento-container-text">testo random</p>
                    </div>

                    <div className="orcamento-container-card">
                        <span className="orcamento-container-card-title">Selecione seu tipo de carro preferido</span>
                        <div className="orcamento-container-card-imageContainer">
                            <div className="orcamento-container-card-imageContainer-image">
                                <img className="" src={Image.Sedan} alt="carro" />
                                <p className="">Sedan</p>
                            </div>
                            <div className="orcamento-container-card-imageContainer-image">
                                <img className="" src={Image.Sedan} alt="carro" />
                                <p className="">Sedan</p>
                            </div>
                            <div className="orcamento-container-card-imageContainer-image">
                                <img className="" src={Image.Sedan} alt="carro" />
                                <p className="">Sedan</p>
                            </div>
                            <div className="orcamento-container-card-imageContainer-image">
                                <img className="" src={Image.Sedan} alt="carro" />
                                <p className="">Sedan</p>
                            </div>
                            
                            <div className="orcamento-container-card-imageContainer-valor">
                                <p className="orcamento-container-card-imageContainer-valor-title">Seu Valor Estimado</p>
                                <p className="orcamento-container-card-imageContainer-valor-text">R$ 20,000</p>
                            </div>
                        </div>

                        <div className="orcamento-container-buget">
                                <div className="orcamento-container-buget-container">
                                    <input className="orcamento-container-buget-container-input" type="text" name="" id=""/>
                                    <p className="orcamento-container-buget-container-input-text">Pagamento mensal</p>
                                </div>
                                
                                <div className="orcamento-container-buget-container">
                                    <input className="orcamento-container-buget-container-input" type="text" name="" id=""/>
                                    <p className="orcamento-container-buget-container-input-text">Sua entrada</p>
                                </div>

                                <input className="orcamento-container-buget-button" type="button" value='Ver Resultados'/>
                            </div>
                    </div>
                </div>
            </section>  
        );
    }
}

export default Orcamento;