import "../styles/menu.css";

import { whiteArrow } from "../assets/white-arrow.svg";
import { backArrow } from "../assets/black-arrow.svg";
import { backgroundImage } from "../assets/background_menu.svg";

export function menu() {  
  let menu = ["Appetizers", "Entrees", "Mains", "Desserts", "Drinks"];
  let amountOfMenuItems = [8, 10, 11, 7, 9];

  const main = document.querySelector("main");

  // Create section
  const createSection = document.createElement("section");
  createSection.setAttribute("id", "menuSection");
  main.appendChild(createSection);


  for (let i = 0; i < menu.length; i++) {

    const container = document.querySelector("#menuSection");

    // Create anchor (a) tag
    const createLink = document.createElement("a");
    createLink.setAttribute("href", "");
    createLink.classList.add("menu-layer");

    // Create div inside the anchor
    const createDiv = document.createElement("div");
    createDiv.classList.add("menu");
    createDiv.classList.add("container");

    // Create p element
    const createP = document.createElement("p");
    createP.textContent = `(${amountOfMenuItems[i]})`;

    // Create h3 element
    const createH3 = document.createElement("h3");
    createH3.textContent = `${menu[i]}`;

    // Create a div
    const createDivImg = document.createElement("div");
    createDivImg.classList.add("arrow");

    createDiv.appendChild(createP);
    createDiv.appendChild(createH3);
    createDiv.appendChild(createDivImg);

    createLink.appendChild(createDiv);

    container.appendChild(createLink);
  }
}
