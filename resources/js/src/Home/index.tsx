import React from "react";
import { HomeProps, HomeState } from "./types/home";


class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {   };
    }

    render() { 
        return (
            <section>
                Home
            </section>
        )
    }
}
 
export default Home