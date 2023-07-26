import React, {Component, createRef} from "react";
import './styles/destaques.scss'
import { DestaquesProps, DestaquesState } from "./types/Destaques";
 
class Destaques extends React.Component<DestaquesProps, DestaquesState> {
    constructor(props:DestaquesProps) {
        super(props);
        this.state = { 
            descricao: false,
        };
        this.destaqueRef = createRef();
    }

    componentDidMount() {
        if (this.destaqueRef.current) {
          this.destaqueRef.current.addEventListener('load', this.handleImageLoad);
        }
    }

    handleImageLoad = () => {
        if (this.destaqueRef.current) {
        //   this.destaqueRef.current.addEventListener('mouseenter', this.toggleDescricao);
        //   this.destaqueRef.current.addEventListener('mouseleave', this.toggleDescricao);
        }
    };
    
    toggleDescricao = () => {
        const { descricao } = this.state 

        // if(descricao){
        //     this.setState({descricao: !this.state.descricao})
        // }else{
        //     setTimeout(() => {
        //         this.setState({descricao: !this.state.descricao})
        //     }, 1800)
        // }
      };

    render() { 
        const { descricao } = this.state
        return ( 
            <section className="card" 
            >
                <div className="card-item" ref={this.destaqueRef} onMouseEnter={this.toggleDescricao} onMouseLeave={this.toggleDescricao}  >
                    <img 
                        className="card-image" 
                        src={this.props.image}
                    />
                    {descricao && (
                        <div 
                            className="card-descricao"
                        >
                            <h1>Nome do Item</h1>
                            <p>Descrição breve do item</p>
                        </div>
                    )}
                </div>
            </section>
         );
    }
}
 
export default Destaques;