import './style.css'


//Print template (Header,Main;Footer)
import { initTemplate } from "./utils/initTemplate";
initTemplate()
// .--- > utilizo una funcion con un switch para controlar que pagina se va a renderizar
import { initControler } from "./utils/route";
initControler();