import { initControler } from "../../utils/route"
import "./home.css"

const template = () =>{
    return `
    <div id="containerDashboard">
    <ul>
      <li>
        <figure id="figurePokemon" class="figureDashboard">
          <img
            src="https://res.cloudinary.com/djglk3cso/image/upload/v1683121888/Game%20Hub/5b91409c-ee55-41da-9404-a71dbdabcd5f_gc49d2.png"
            alt="navigate to page pokemon"
            id="imgPokemon"
          />
          <h2>Pokedex</h2>
        </figure>
      </li>
    `
}

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
}