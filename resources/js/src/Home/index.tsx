import React from "react";
import { HomeProps, HomeState } from "./types/home";
import Imagem from './assets/WaderBug.png'
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
            <body>
                {/* <HomeComponents.Destaques image={Imagem}/> */}
                {/* <HomeComponents.Filtro/> */}
                <div style={{marginTop: 100}}>
                {/* <HomeComponents.Categoria/> */}
                </div>
                {/* <HomeComponents.MaisProcurados/> */}
            </body>
        )
    }
}
 
export default Home