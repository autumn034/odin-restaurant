import '../css/home.css';
export default function homeComponent() {
    let element = document.createElement('div');
    element.textContent = "Hello";
    element.className = "red";
    return element;
}