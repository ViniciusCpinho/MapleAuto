import React, {Component, createRef} from "react";
import './styles/destaques.css'
import { DestaquesProps, DestaquesState } from "./types/destaques";
 
class Destaques extends React.Component<DestaquesProps, DestaquesState> {
    constructor(props:DestaquesProps) {
        super(props);
        this.state = { 
            descricao: false,
        };
        this.imageRef = createRef();
        this.descricaoRef = createRef();
    }

    componentDidMount() {
        if (this.imageRef.current) {
          this.imageRef.current.addEventListener('load', this.handleImageLoad);
        }
    }

    handleImageLoad = () => {
        if (this.imageRef.current) {
          this.imageRef.current.addEventListener('mouseenter', this.toggleDescricao);
          this.imageRef.current.addEventListener('mouseleave', this.toggleDescricao);
        }
    };
    
    toggleDescricao = () => {
        this.setState({descricao: !this.state.descricao})
      };



    render() { 
        const { descricao } = this.state
        return ( 
            <section className="card">
                <div className="card-item">
                    <img 
                        ref={this.imageRef} 
                        className="card-image" 
                        src={this.props.image} 
                        onMouseEnter={this.toggleDescricao}
                        onMouseLeave={this.toggleDescricao} 
                    />

                    {descricao ? (
                        <div 
                            className="card-descricao"
                            ref={this.descricaoRef}
                        >
                            <h1>Nome do Item</h1>
                            <p>Descrição breve do item</p>
                        </div>
                    ) : null}
                </div>
            </section>
         );
    }
}
 
export default Destaques;