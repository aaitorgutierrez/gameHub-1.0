import "./login.css"

const template = () => {
    return `
    <div class="loginContainer">
    <div class ="formBox">
        <h1>Sign up</h1>
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
      <button id="loginButton">Sumbit</button>
    </div>
  </div>
`
}
const addListeners = () => {
  const buttonLogin = document.getElementById("loginButton");
  buttonLogin.addEventListener("click", () => {
    const inputLogin = document.querySelector("input");
    localStorage.setItem("name", inputLogin.value);
    if (localStorage.getItem("name"))
      document.querySelector("nav").style.display = "block";
    initControler();
  });
};


export const printTemplate = () => {
  if (!localStorage.getItem("user"))
    document.querySelector("#app").innerHTML = template()
    addListeners()
}