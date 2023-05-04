import "./footer.css"

const template = () => {
    return `
    <ul class="footerUl">
            <li>
                <i class="fa-brands fa-youtube fa-xl" style="color: #ffffff;"></i>
            </li>
            <li>
                <i class="fa-brands fa-twitter fa-xl" style="color: #ffffff;"></i>
            </li>
            <li>
            <i class="fa-brands fa-facebook-f fa-xl" style="color: #ffffff;"></i>
            </li>
    </ul>  
    <div>
        <p>Copyright © - Aitor Gutierrez Izquierdo</p>
    </div>  
    `
}

export const printTemplate = () => {
    document.querySelector("footer").innerHTML = template()
}

// {/* <div class="footerDiv">
//         <div>
//         <ul>
//             <li>
//             <i class="fa-brands fa-square-instagram" style="color: #ffffff;"></i>
//             <li>
//             <li>
//             <i class="fa-brands fa-square-twitter" style="color: #000000;"></i>  
//             <li>
//             <li>
//             <i class="fa-brands fa-square-facebook" style="color: #000000;"></i>  
//             <li>
//         </ul>  
//         <div>
//         </div>
//         <p>Copyright © - Aitor Gutierrez Izquierdo</p>
//         </div> 
//     </div> */}