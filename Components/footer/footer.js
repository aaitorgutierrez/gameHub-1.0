import "./footer.css"

const template = () => {
    return `
    <div class="footerDiv">
        <div>
        <ul>
            <li>
            <i class="fa-brands fa-square-instagram" style="color: #ffffff;"></i>
            <li>
            <li>
            <i class="fa-brands fa-square-twitter" style="color: #000000;"></i>  
            <li>
            <li>
            <i class="fa-brands fa-square-facebook" style="color: #000000;"></i>  
            <li>
        </ul>  
        <div>
        </div>
        <p>Copyright © - Aitor Gutierrez Izquierdo</p>
        </div> 
    </div>
    `
}

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template()
}