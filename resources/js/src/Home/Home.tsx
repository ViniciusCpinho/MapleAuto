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
                <h1>Home Page</h1>
            </section>
        );
    }
}
 
export default Home;