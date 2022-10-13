import "./styles/main.scss";
import generateJoke from "./generateJoke";
import laughing from "./assets/laughing.svg";


document.getElementById("laughImg").src = laughing;
document.querySelector("#jokeBtn").addEventListener("click", generateJoke);
