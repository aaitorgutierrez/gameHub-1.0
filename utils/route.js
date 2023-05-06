import { printTemplate as Login} from "../pages/Login/login";
import { printTemplate as Home} from "../pages/home/home";
import { printTemplate as Pokedex} from "../pages/pokedex/pokedex";


export const initControler = (route) => {
    switch (route) {
        case undefined:
            localStorage.getItem("name") ? Home() : Login()
            break;
        case "Home":
        Home()
        break
        case "Login":
        Login();
        break;
        case "Pokedex":
        Pokedex();
        break;

    }
}

