import React, { Component, createRef } from "react";
import './styles/destaques.scss'
import { DestaquesProps, DestaquesState } from "./types/destaques";

class Destaques extends React.Component<DestaquesProps, DestaquesState> {
    constructor(props: DestaquesProps) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        }
    }

    componentDidMount() {
        const width = window.innerWidth - 18
        const height = (width * (70 / 100));
        this.setState({ width: width, height: height })

    }

    render() {
        return (
            <section
                className="destaques"
                style={{
                    width: this.state.width,
                    height: this.state.height
                }}
            >
                <img className="destaques-image" src={this.props.image} alt="Nome do Carro" />
                <div className="destaques-image-filtro"/>
                <div className="destaques-container">
                    <div className="destaques-title">
                        Encontre a emoção ao volante
                        <div className="destaques-line"/>
                    </div>
                    <form
                        className="destaques-selecao"
                        action="#"
                        style={{
                            color: "white"
                        }}
                    >
                        <div className="destaques-selecao-borda">
                            <div
                                style={{
                                    backgroundColor: 'white',
                                }}
                                className="destaques-selecao-container"
                            >
                                <div className="destaques-selecao-marcas">
                                    <select className="destaques-selecao-select">
                                        <option value="">Marca</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="audi">Audi</option>
                                        <option value="bmw">BMW</option>
                                        <option value="mercedes">Mercedes</option>
                                    </select>

                                    <select className="destaques-selecao-select">
                                        <option value="">Modelo</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="audi">Audi</option>
                                        <option value="bmw">BMW</option>
                                        <option value="mercedes">Mercedes</option>
                                    </select>

                                    <select className="destaques-selecao-select">
                                        <option value="">Preço</option>
                                        <option value="volvo">10</option>
                                        <option value="audi">20</option>
                                        <option value="bmw">30</option>
                                        <option value="mercedes">40</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <input className="destaques-selecao-button" type="button" value="Procurar" />
                    </form>
                </div>
            </section>
        );
    }
}

export default Destaques;