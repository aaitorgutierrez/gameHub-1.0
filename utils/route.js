import { printTemplate as Login, printTemplate} from "../pages/Login/login";
import { printTemplate as Home} from "../pages/home/home";
printTemplate

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
    }
}

