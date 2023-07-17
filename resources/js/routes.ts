import { RoutesType } from "./types/routes";

import Home from "./src/Home";



const routes:RoutesType = {
    Home: {
        name: 'Home',
        route: '/',
        component: Home,
    },
    Contact: {
        name: 'Contact',
        route: '/',
        component: null,
    },
}

export default routes