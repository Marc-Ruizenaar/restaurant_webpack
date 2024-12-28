import * as css from "./styles/style.css";

// Import svg
import logo from "./assets/logo.svg";

// Import Favicon
import androidChrome192 from "./assets/favicon/android-chrome-192x192.png";
import androidChrome512 from "./assets/favicon/android-chrome-512x512.png";
import appleTouchIcon from "./assets/favicon/apple-touch-icon.png";
import favicon16 from "./assets/favicon/favicon-16x16.png";
import favicon32 from "./assets/favicon/favicon-32x32.png";
import faviconIco from "./assets/favicon/favicon.ico";
import siteWebmanifest from "./assets/favicon/site.webmanifest";

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