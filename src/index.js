import home from "./page/home"; // returns div element
import menu from "./page/menu";
import contact from "./page/contact";

const contentElement = document.querySelector(".content");


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
