import React from "react";
import { HomeProps, HomeState } from "./types/home";
import Imagem from './assets/carroDestaque.jpg'
import './styles/home.scss'
import { HomeComponents } from "./components";

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(): void {
        document.title = this.props.name
    }


    render() {
        return (
            <body className="home">
                <div className="home-toplink">
                    <HomeComponents.TopLink/>
                </div>

                <div className="home-destaques">
                    <HomeComponents.Destaques image={Imagem}/>
                </div>
                
                <div className="home-texto">
                    <HomeComponents.Texto/>
                </div>

                <div className="home-orcamento">
                    <HomeComponents.Orcamento/>
                </div>

                <div>
                    <HomeComponents.Tipo/>
                </div>

                <div className="home-carroDestaque">
                    <HomeComponents.CarroDestaque/>
                </div>

            </body>
        )
    }
}
 
export default Home