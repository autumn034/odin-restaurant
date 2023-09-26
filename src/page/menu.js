import '../css/menu.css';
import steakImgSrc from '../img/steak.png';
import sweetMadameImgSrc from '../img/sweet_madame.png';
import hashbrowImgSrc from '../img/hashbrow.png';

export default function menu() {
    const createMenuFood = (name, cost, imgSrc) => {
        return { name, cost, imgSrc}
    };

    const menu = [
        createMenuFood(
            "Steak", 
            14.99,
            steakImgSrc,
        ),
        createMenuFood(
            "Sweet Madame", 
            29.99,
            sweetMadameImgSrc,
            ),
        createMenuFood(
            "Mondstadt Hash Brown", 
            4.99, 
            hashbrowImgSrc,
            ),
    ];

    let menuElement = document.createElement("div");
    menuElement.className = "menu";

    let menuHeaderElement = document.createElement("div");
    menuHeaderElement.className = "menu-header";
    menuHeaderElement.textContent = "Menu";

    let menuItemContainerElement = document.createElement("div");
    menuItemContainerElement.className = "menu-item-container";

    menu.forEach(food => {
        let menuItemElement = document.createElement("div");
        menuItemElement.className = "menu-item";

        // build img div
        let menuItemImgContainerElement = document.createElement("div");
        menuItemImgContainerElement.className = "menu-item-img"
        let menuItemImgElement = new Image();
        menuItemImgElement.src = food.imgSrc;
        menuItemImgContainerElement.appendChild(menuItemImgElement);

        // build menu info div
        let menuItemInfoElement = document.createElement("div");
        menuItemInfoElement.className = "menu-item-info";

        let menuItemInfoNameElement = document.createElement("div");
        menuItemInfoNameElement.className = "menu-item-info-name";
        menuItemInfoNameElement.textContent = food.name;

        let menuItemInfoPriceElement = document.createElement("div");
        menuItemInfoPriceElement.className = "menu-item-info-price";
        menuItemInfoPriceElement.textContent = food.cost;

        menuItemInfoElement.appendChild(menuItemInfoNameElement);
        menuItemInfoElement.appendChild(menuItemInfoPriceElement);

        // wrap menu info div + img div into main element
        menuItemElement.appendChild(menuItemImgContainerElement);
        menuItemElement.appendChild(menuItemInfoElement);


        menuItemContainerElement.appendChild(menuItemElement);


    });
    
    menuElement.appendChild(menuHeaderElement);
    menuElement.appendChild(menuItemContainerElement);

    return menuElement;
}
