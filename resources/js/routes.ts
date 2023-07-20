import { RoutesType } from "./types/routes";

import Home from "./src/Home";



const routes:RoutesType = {
    Home: {
        name: 'Home',
        route: '/',
        component: Home,
    },
}

export default routes