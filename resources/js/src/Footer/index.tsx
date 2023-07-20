import React, { Component } from "react";
import './styles/footer.scss'
import style from "@/config/colors-config";
import { FooterProps, FooterState } from "./types/footer";
class Footer extends React.Component<FooterProps, FooterState>{
    constructor(props: FooterProps) {
        super(props);
        this.state = {
            color: '#FFF'
        }
    }

    // private handleHover = (event) => {
    //     event.target.style.color = style.headerLinkHover;
    //   };

    // private handleLeave = (event) => {
    //     event.target.style.color = style.headerLink;
    //   };

    render() {
        return (
            <footer className="footer">
                Todos os direitos pertencentes a ninguém
            </footer>
        );
    }
}

export default Footer;