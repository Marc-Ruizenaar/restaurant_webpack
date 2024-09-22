import "../styles/jumboHeader.css";

import { restaurantImage } from "../assets/restaurant.jpg";
import { arrowMenu } from "../assets/arrow_see_menu.svg";

export function jumboHeader() {

    const jumboHeaderContainer = document.querySelector("main");

    // Create section
    const createSection = document.createElement("section");
    createSection.setAttribute("id", "jumboHeader");
    createSection.classList.add("container");

    // Create div
    const createDiv = document.createElement("div");
    createDiv.classList.add("inner");

    // Create h2 element
    const createH2 = document.createElement("h1");
    createH2.textContent = "Discover the flavors of Norway at our authentic Norwegian cuisine Restaurant";

    // Create p element
    const createP = document.createElement("p");
    createP.textContent = "Indulge in traditional dishes made with the freshest locally sourced ingredient, expertly prepared to showcase the rich culinary heritage of Norway.";

    // Create anchor tag
    const createLink = document.createElement("a");
    createLink.setAttribute("href", "#menuSection");
    createLink.setAttribute("aria-label", "See menu");
    createLink.classList.add("menuLayer");

    // Create p element
    const createP2 = document.createElement("p");
    createP2.textContent = "See menu";
    createP2.classList.add("menuText");

    // Create img element
    const createImg = document.createElement("img");
    createImg.setAttribute("src", './arrow_see_menu.svg');
    createImg.classList.add("arrowMenu");

    // Create big img element
    const createBigImg = document.createElement("img");
    createBigImg.setAttribute("src", './restaurant.jpg');
    createBigImg.setAttribute("alt", "Restaurant Fjordsmaken");

    createDiv.appendChild(createH2);
    createDiv.appendChild(createP);
    createDiv.appendChild(createLink);
    createLink.appendChild(createP2);
    createLink.appendChild(createImg);

    jumboHeaderContainer.appendChild(createSection);
    createSection.appendChild(createDiv);
    createSection.appendChild(createBigImg);
}