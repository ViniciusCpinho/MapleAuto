import React, { Component} from "react";
import './styles/CarroDestaque.scss'

class CarroDestaque extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    
    render() {
        const carros = [
            { nome: 'Carro 1', tipo: 'cat', quilometro: '10000 km', cambio: 'Automático', preco: 12231 },
            { nome: 'Carro 1', tipo: 'cat', quilometro: '10000 km', cambio: 'Automático', preco: 12231 },
            { nome: 'Carro 2', tipo: 'dog', quilometro: '5000 km', cambio: 'Manual', preco: 15000 },
            // Adicione mais objetos de carro conforme necessário
        ];

        return (
            <section style={{backgroundColor: 'white'}}>
                    <div className="carroDestaque-title">
                        <p>Carros em Destaque</p>
                    </div>
                    
                    <div className="carroDestaque">
                        {carros.map((carro, index) => (
                        <div key={index} className="carroDestaque-item">
                            <div className="carroDestaque-item-image"></div>
                            <div className="carroDestaque-item-title">
                            <p>{carro.nome}</p>
                            </div>
                            <div className="carroDestaque-item-properties">
                            <p
                                className="carroDestaque-item-properties-type"
                                style={{
                                backgroundColor: 'black',
                                color: 'white',
                                borderWidth: 0,
                                }}
                            >
                                {carro.tipo}
                            </p>
                            <p className="carroDestaque-item-properties-type">{carro.quilometro}</p>
                            <p className="carroDestaque-item-properties-type">{carro.cambio}</p>
                            </div>
                            <div className="carroDestaque-item-price">
                            Preço {carro.preco}
                            </div>
                            <div className="carroDestaque-item-button">
                            <input className="carroDestaque-item-button-item" type="button" value="Ver" />
                            </div>
                        </div>
                        ))}
                    </div>
            </section>
        );
    }
}

export default CarroDestaque;