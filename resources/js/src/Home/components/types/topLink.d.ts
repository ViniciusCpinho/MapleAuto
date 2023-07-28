import { colorsInterface } from "@/config/colors/types";

export interface linkProps {
    link: [{
        rota: string;
        nome: string;
    }];
}

export interface TopLinkProps {

}

export interface TopLinkState {
    colors?: colorsInterface
}