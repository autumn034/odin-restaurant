import '../css/home.css';
export default function home() {
    let element = document.createElement('div');
    element.className = "home";
    element.innerHTML = `
        <div class="home-info">
            <div class="home-info-header">Eat.<br>Drink.<br>Adventure.<div>
        </div>
    `;

    return element;
}