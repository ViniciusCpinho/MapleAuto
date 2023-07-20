import React, { Component } from "react";
import './styles/footer.scss'
import { FooterProps, FooterState } from "./types/footer";
import { setColors } from "@/config/colors/setColor";
class Footer extends React.Component<FooterProps, FooterState>{
    constructor(props: FooterProps) {
        super(props);
        this.state = {
            colors: undefined
        }
    }

    componentDidMount(): void {
        const colors = setColors('Footer')
        this.setState({ colors: colors})
        console.log(colors)
    }

    render() {
        const { colors } = this.state
        return (
            <footer className="footer" style={{background: colors?.background, color: colors?.title}}>
                Todos os direitos pertencentes a ninguém
            </footer>
        );
    }
}

export default Footer;