import { printTemplate as printFooter} from "../Components/footer/footer";
import { printTemplate as printHeader} from "../Components/header/header";


export const initTemplate = () => {
    const app = document.querySelector("#app");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
  
    app.append(header, main, footer);
    printFooter();
    printHeader()
  };

  

