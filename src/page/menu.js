import '../css/menu.css';
export default function menu() {
    const createMenuFood = (name, cost, description) => {
        return { name, cost, description}
    };

    const menu = [
        createMenuFood("Steak", 14.99, "A grilled steak. High heat has locked the juices in, giving one high expectations for when the meat is cut open."),
        createMenuFood("Sweet Madame", 29.99, "Honey-roasted fowl. The honey and sweet flowers come together to compliment the tender fowl meat."),
        createMenuFood("Mondstadt Hash Brown", 4.99, "A fried cake of mashed potatoes. A little bit of pinecone helps give it a nice crunch, and great with a bit of jam. Loved by people of all ages."),
    ];

    let menuElement = document.createElement("div");
    menuElement.className = "menu";

    menu.forEach(food => {
        let foodElement = document.createElement("div");
        foodElement.className = "menu-item";
        


    });


    menuElement.innerHTML = `
        <div class="menu">
            <div class="menu-header">Menu</div>
            <div class="menu-item">
                <div class="menu-item-name">Steak</div>
                <div class="menu-item-price">14.99</div>
                <div class="menu-item-description">A grilled steak. High heat has locked the juices in, giving one high expectations for when the meat is cut open.</div>
            </div>
            <div class="menu-item">
            <div class="menu-item-name">Steak</div>
            <div class="menu-item-price">14.99</div>
            <div class="menu-item-description">A grilled steak. High heat has locked the juices in, giving one high expectations for when the meat is cut open.</div>
        </div>
        <div class="menu-item">
        <div class="menu-item-name">Steak</div>
        <div class="menu-item-price">14.99</div>
        <div class="menu-item-description">A grilled steak. High heat has locked the juices in, giving one high expectations for when the meat is cut open.</div>
    </div>
        </div>
    `;




    return menuElement;
}
