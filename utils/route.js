import { printTemplate as Login } from "../pages/Login/login";
import { printTemplate as Home } from "../pages/home/home";
import { printTemplate as Pokedex } from "../pages/pokedex/pokedex";
import { printTemplate as Quiz } from "../pages/quiz/quiz";
import { printTemplate as Hangman } from "../pages/hangman/hangman";
import { printTemplate as about } from "../pages/aboutUs/aboutUs";

export const initControler = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("name") ? Home() : Login();
      break;
    case "Home":
      Home();
      break;
    case "Login":
      Login();
      break;
    case "Pokedex":
      Pokedex();
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
  }
};

