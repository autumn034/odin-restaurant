import "../css/home.css";

export default function home() {
    let homeElement = document.createElement('div');
    homeElement.className = "home";
    homeElement.innerHTML = `
        <div class="home-info">
            <div class="home-info-header">Eat.<br>Drink.<br>Adventure.<div>
        </div>
    `;

    return homeElement;
}