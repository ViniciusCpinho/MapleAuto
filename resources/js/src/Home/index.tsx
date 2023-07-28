import React from "react";
import { HomeProps, HomeState } from "./types/home";
import Imagem from './assets/carroDestaque.jpg'
import './styles/home.scss'
import { HomeComponents } from "./components";

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {   };
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
                
                <div className="home-filtro">
                    <HomeComponents.BarraPesquisa/>
                </div>
                {/* <div style={{marginTop: 100}}>
                <HomeComponents.Categoria/>
                </div> */}
                {/* <HomeComponents.MaisProcurados/> */}
            </body>
        )
    }
}
 
export default Home