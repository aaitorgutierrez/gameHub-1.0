import "./aboutUs.css";

const template = () => {
  return `
    <section class="contact">
      <div class="contactForm">
        <h1 class="colorAboutH1">Contact <span>Us</span></h1>
        <p class="colorAboutP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
          iusto molestiae expedita?
        </p>
        <form>
          <input type="" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            id="formularioEmail"
            placeholder="E-mail"
            required
          />
          <input type="" id="formTopic"placeholder="Topic" required />
          <textarea
            name=""
            id="formTextArea"
            cols="30"
            rows="10"
            placeholder="More information"
          >
          </textarea>
          <button type="button" class="btn">Submit</button>
        </form>
      </div>
      <div class="contactImg">
        <img
          src="https://res.cloudinary.com/djglk3cso/image/upload/v1683624788/Dise%C3%B1o_sin_t%C3%ADtulo_1_gmqgat.png"
        />
      </div>
    </section>
  `;
};

// const addListener = () => {
//   document.querySelector(".btn").addEventListener("click", () => {
//     const mailOptions = {
//       from: import.meta.env.VITE_EMAIL,
//       to: document.getElementById("formularioEmail").value,
//       subject: document.getElementById("formTopic").value,
//       text: document.getElementById("formTextArea").value,
//     };
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: import.meta.env.VITE_EMAIL,
//         pass: import.meta.env.VITE_NODEMAILER,
//       },
//     });
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Correo electrónico enviado: " + info.response);
//       }
//     });
//   });
// };
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addListener();
};
