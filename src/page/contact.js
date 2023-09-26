import "../css/contact.css";
import storeFrontImg from "../img/store_front.png";

export default function contact() {
    let contactElement = document.createElement("div");
    contactElement.className = "contact";

    let contactHeaderElement = document.createElement("div");
    contactHeaderElement.className = "contact-header";
    contactHeaderElement.textContent = "Contact";

    let contactContainerElement = document.createElement("div");
    contactContainerElement.className = "contact-container";

    let contactImgContainerElement = document.createElement("div");
    contactImgContainerElement.className = "contact-img";
    let contactImgElement = new Image();
    contactImgElement.src = storeFrontImg;
    contactImgContainerElement.appendChild(contactImgElement);

    let contactInfoElement = document.createElement("div");
    contactInfoElement.className = "contact-info";
    contactInfoElement.append("Weekdays: 10am - 11pm");
    contactInfoElement.appendChild(document.createElement("br"));
    contactInfoElement.append("Weekends: 10am - 10pm");
    contactInfoElement.appendChild(document.createElement("br"));
    contactInfoElement.appendChild(document.createElement("br"));
    contactInfoElement.append("(186)-529-2610");
    contactInfoElement.appendChild(document.createElement("br"));
    contactInfoElement.append("angelshare@mail.com");


    contactContainerElement.appendChild(contactImgContainerElement);
    contactContainerElement.appendChild(contactInfoElement);

    contactElement.appendChild(contactHeaderElement);
    contactElement.appendChild(contactContainerElement);


    return contactElement;
}