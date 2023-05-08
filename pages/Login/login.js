import { initControler } from "../../utils/route";
import "./login.css"

const template = () => {
    return `
    <div class="loginContainer">
    <div class ="formBox">
        <h1 class="colorSign">Sign up</h1>
        <form>
          <div class="input-group">
            <div class="input-field">
              <i class="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Name">
            </div>
            <div class="input-field">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="password">
            </div>
          </div>
        </form>
      <button id="loginButton">Submit</button>
    </div>
  </div>
`
}
const addListeners = () => {
  const buttonLogin = document.getElementById("loginButton");
  buttonLogin.addEventListener("click", () => {
    const inputLogin = document.querySelector("input");
    localStorage.setItem("user", inputLogin.value);
    if (localStorage.getItem("user"))
    document.querySelector("nav").style.display = "flex";
    initControler("Home");
  });
};

export const printTemplate = () => {
    console.log("entro")
    if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none"
    document.querySelector("main").innerHTML = template()
    addListeners()
}