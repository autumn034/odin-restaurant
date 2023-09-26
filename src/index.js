import home from "./page/home"; // returns div element
import menu from "./page/menu";
import contact from "./page/contact";
import "./css/index.css";

const contentElement = document.querySelector(".content");
contentElement.appendChild(home());

document.querySelector("#home-btn").addEventListener("click", e => {
    contentElement.textContent = '';
    contentElement.appendChild(home());
});

document.querySelector("#menu-btn").addEventListener("click", e => {
    contentElement.textContent = '';
    contentElement.appendChild(menu());
});

document.querySelector("#contact-btn").addEventListener("click", e => {
    contentElement.textContent = '';
    contentElement.appendChild(contact());
});
