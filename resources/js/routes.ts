import { RoutesType } from "./types/routes";

import Home from "./src/Home/Home";
import Contact from "./src/Contact/Contact";



const routes:RoutesType = {
    Home: {
        name: 'Home',
        route: '/',
        component: Home,
    },
    Contact: {
        name: 'Contact',
        route: '/Contact',
        component: Contact,
    },
}

export default routes