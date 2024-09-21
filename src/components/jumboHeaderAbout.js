import "../styles/jumboHeader.css";

import { restaurantImage } from "../assets/restaurant.jpg";
import { arrowMenu } from "../assets/arrow_see_menu.svg";

export function jumboHeaderAbout() {
  const jumboHeaderContainer = document.querySelector("main");

  // Create section
  const createSection = document.createElement("section");
  createSection.setAttribute("id", "jumboHeader");
  createSection.classList.add("container");

  // Create div
  const createDiv = document.createElement("div");
  createDiv.classList.add("inner");

  // Create h2 element
  const createH2 = document.createElement("h2");
  createH2.textContent = "We are Fjordsmaken";

  // Create p element
  const createP = document.createElement("p");
  createP.textContent =
    "Indulge in traditional dishes made with the freshest locally sourced ingredient, expertly prepared to showcase the rich culinary heritage of Norway.";

  // Create big img element
const createYoutubeVideo = document.createElement("iframe");
createYoutubeVideo.classList.add("youtubeVideo");
createYoutubeVideo.setAttribute("width", "100%");
createYoutubeVideo.setAttribute("src", "https://www.youtube.com/embed/GlvoPLvpisg?start=143");
createYoutubeVideo.setAttribute("frameborder", "0");
createYoutubeVideo.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
createYoutubeVideo.setAttribute("allowfullscreen", true);

  // Create anchor tag
  const createLink = document.createElement("a");
  createLink.setAttribute("href", "#menuSection");
  createLink.classList.add("menuLayer");

  createDiv.appendChild(createH2);
  createDiv.appendChild(createP);
  createDiv.appendChild(createLink);

  jumboHeaderContainer.appendChild(createSection);
  createSection.appendChild(createDiv);
  createSection.appendChild(createYoutubeVideo);
}
