import { printTemplate as printFooter} from "../Pages/footer/footer";


export const initTemplate = () => {
    const app = document.querySelector("#app");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
  
    app.append(header, main, footer);
    printFooter();
  };

  

