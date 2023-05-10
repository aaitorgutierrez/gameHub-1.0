import { initControler } from "../../utils/route";
import "./header.css";

const template = () => {
  return `
   <nav class="headerNav">
        <div class="logo">
            <h3><i class="fa-solid fa-dragon fa-xl" style="color: #ffffff;"></i>DragonHub</h3>
        </div>
        <ul class="navLinks">
            <li><button class="headerButton" id="buttonHome">Home</button></li>
            <li><button class="headerButton">Merch</button></li>
            <li><button class="headerButton" id="buttonAboutUs">About us</button></li>
            <li><button class="headerButton" id="buttonChangeUser">Change user</button></li>
        </ul>
    </nav>
    <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
   `;
};

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");
  // esto es para el toggle de la hamburgesa
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // esto es para la animación de los links
    navLinks.forEach((link, index) => {
      // esto lo que hace es que podamos alterar la animación a traves de un template string
      if (link.style.animation) {
        // esto es para cada vez que se abre el menu se ejecute la animacion
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
      // esta línea de código aplica la animación navLinkFade a un elemento de enlace con una duración de 0,5 segundos,
      // una función de temporización fácil,
      //  un modo de relleno de reenvíos y un retraso calculado en función del valor del índice.
    });
  });
};

const addListeners = () => {
  const buttonDashboard = document.getElementById("buttonHome");
  buttonDashboard.addEventListener("click", () => {
    initControler("Home");
  });
  const buttonAboutUs = document.getElementById("buttonAboutUs");
  buttonAboutUs.addEventListener("click", () => {
    initControler("about");
  });
  const buttonChangeUser = document.getElementById("buttonChangeUser");
  buttonChangeUser.addEventListener("click", (e) => {
    localStorage.removeItem("user");
    initControler("Login");
    if (!localStorage.getItem("user"))
      document.querySelector("nav").style.display = "none";
  });
};

export const printTemplate = () => {
  document.querySelector("Header").innerHTML = template();
  navSlide();
  addListeners();
};
