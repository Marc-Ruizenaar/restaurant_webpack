import * as css from "./styles/style.css";

// Import svg
import logo from "./assets/logo.svg";

// Import Favicon
import favicon from "./assets/favicon.png";

// Import pages
import { homePage } from "./pages/homePage";
import { menuPage } from "./pages/menuPage";
import { aboutPage } from "./pages/aboutPage";
import { contactPage } from "./pages/contactPage";

function loadPages(val) {
  const content = document.querySelector("main");
  content.innerHTML = ""; // Clear the content before loading a new page

  if (val === "home") {
    homePage();
  } else if (val === "menu") {
    menuPage();
  } else if (val === "about") {
    aboutPage();
  } else if (val === "contact") {
    contactPage();
  }
}

// Make loadPages available globally
window.loadPages = loadPages;

loadPages("home");

// Open popup
function togglePopup() {
  const popup = document.querySelector('.popupMobile');
  if (popup) {
  popup.classList.toggle('active');
  }
}