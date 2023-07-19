import React from "react";
import { HomeProps, HomeState } from "./types/home";
import Imagem from './assets/WaderBug.png'
import { Destaques } from "./components";
import './styles/home.scss'
import Filtro from "./components/filtro";

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
                <Destaques image={Imagem}/>
                <Filtro />
            </body>
        )
    }
}
 
export default Home