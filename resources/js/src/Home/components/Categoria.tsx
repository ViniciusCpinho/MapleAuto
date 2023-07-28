import React, { Component } from "react";
import './styles/Categoria.scss'

class Categoria extends React.Component {
    render() {
        return (
            <section className="categoria">
                <div className="categoria-item">
                    <h1 className="categoria-texto">Categoria</h1>

                    <div className="categoria-image-item">
                        <div className="categoria-square" />
                        <div className="categoria-square" />
                        <div className="categoria-square" />
                        <div className="categoria-square" />
                        <div className="categoria-square" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Categoria;