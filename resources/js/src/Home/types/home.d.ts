import { colorsInterface } from "@/config/colors/types"


export interface HomeProps {
    name: string
}

export interface HomeState {
    colors?: colorsInterface | undefined;
}