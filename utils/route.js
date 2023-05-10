import { printTemplate as Login } from "../pages/Login/login";
import { printTemplate as Home } from "../pages/home/home";
import { printTemplate as Pokemon } from "../pages/Pokemon/Pokemon";
import { printTemplate as Quiz } from "../pages/quiz/quiz";
import { printTemplate as Hangman } from "../pages/hangman/hangman";
import { printTemplate as about } from "../pages/aboutUs/aboutUs";
import { printTemplate as Memory } from "../pages/Memory/Memory";

export const initControler = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("name") ? Home() : Home();
      break;
    case "Home":
      Home();
      break;
    case "Login":
      Login();
      break;
    case "Pokemon":
      Pokemon();
      break;
    case "Quiz":
      Quiz();
      break;
    case "Hangman":
      Hangman();
      break;
    case "about":
      about();
      break;
    case "Memory":
      Memory();
      break;
  }
};
