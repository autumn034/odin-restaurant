import '../css/home.css';
export default function home() {
    let element = document.createElement('div');
    element.textContent = "home";
    element.className = "red";
    return element;
}