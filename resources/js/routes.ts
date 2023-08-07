import { RoutesType } from "./types/routes";

import Home from "./src/Home";
import Comprar from "./src/Comprar";

const nomeSite = 'MapleAuto |'


const routes:RoutesType = {
    Home: {
        name: `${nomeSite} Home`,
        route: '/',
        component: Home,
    },
    Comprar: {
        name: `${nomeSite} Comprar`,
        route: '/comprar',
        component: Comprar,
    }
}

export default routes