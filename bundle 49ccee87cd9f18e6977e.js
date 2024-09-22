/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _styles_contactBlock_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contactBlock.css */ "./src/styles/contactBlock.css");
/* harmony import */ var _assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/facebook_icon.svg */ "./src/assets/facebook_icon.svg");
/* harmony import */ var _assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/instagram_icon.svg */ "./src/assets/instagram_icon.svg");
/* harmony import */ var _assets_twitter_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/twitter_icon.svg */ "./src/assets/twitter_icon.svg");


// Import images



function contact() {
  var main = document.querySelector("main");

  // Create contact section
  var contactSection = document.createElement("section");
  contactSection.id = "contactUs";
  contactSection.className = "container";

  // Create content div
  var contentDiv = document.createElement("div");
  contentDiv.className = "content";

  // Add heading
  var heading = document.createElement("h2");
  heading.textContent = "Contact us";

  // Add paragraph
  var paragraph = document.createElement("p");
  paragraph.textContent = "We are always happy to hear from you. If you have any questions or suggestions, please feel free to contact us.";

  // Add phone link
  var phoneLink = document.createElement("a");
  phoneLink.href = "tel:+31628672650";
  phoneLink.textContent = "+31 6 286 726 50";

  // Add email link
  var emailLink = document.createElement("a");
  emailLink.href = "mailto:hi@fjordsmaken.com";
  emailLink.textContent = "hi@fjordsmaken.com";

  // Create social media div
  var socialMediaDiv = document.createElement("div");
  socialMediaDiv.className = "social_media";

  // Add Facebook link
  var facebookLink = document.createElement("a");
  facebookLink.href = "";
  var facebookImg = document.createElement("img");
  facebookImg.src = _assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
  facebookImg.alt = "Facebook";
  facebookLink.appendChild(facebookImg);

  // Add Instagram link
  var instagramLink = document.createElement("a");
  instagramLink.href = "";
  var instagramImg = document.createElement("img");
  instagramImg.src = _assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
  instagramImg.alt = "Instagram";
  instagramLink.appendChild(instagramImg);

  // Add Twitter link
  var twitterLink = document.createElement("a");
  twitterLink.href = "";
  var twitterImg = document.createElement("img");
  twitterImg.src = _assets_twitter_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  twitterImg.alt = "Twitter";
  twitterLink.appendChild(twitterImg);

  // Append social media links to social media div
  socialMediaDiv.appendChild(facebookLink);
  socialMediaDiv.appendChild(instagramLink);
  socialMediaDiv.appendChild(twitterLink);

  // Append elements to content div
  contentDiv.appendChild(heading);
  contentDiv.appendChild(paragraph);
  contentDiv.appendChild(phoneLink);
  contentDiv.appendChild(emailLink);
  contentDiv.appendChild(socialMediaDiv);

  // Create form div
  var formDiv = document.createElement("div");
  formDiv.className = "form";

  // Create form
  var form = document.createElement("form");
  form.action = "";

  // Add name input
  var nameInputDiv = document.createElement("div");
  nameInputDiv.className = "input";
  var nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Full name";
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInputDiv.appendChild(nameLabel);
  nameInputDiv.appendChild(nameInput);

  // Add email input
  var emailInputDiv = document.createElement("div");
  emailInputDiv.className = "input";
  var emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
  emailInputDiv.appendChild(emailLabel);
  emailInputDiv.appendChild(emailInput);

  // Add message input
  var messageInputDiv = document.createElement("div");
  messageInputDiv.className = "input";
  var messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.textContent = "Message";
  var messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageInputDiv.appendChild(messageLabel);
  messageInputDiv.appendChild(messageTextarea);

  // Add submit button
  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send";

  // Append inputs and button to form
  form.appendChild(nameInputDiv);
  form.appendChild(emailInputDiv);
  form.appendChild(messageInputDiv);
  form.appendChild(submitButton);

  // Append form to form div
  formDiv.appendChild(form);

  // Append content and form divs to contact section
  contactSection.appendChild(contentDiv);
  contactSection.appendChild(formDiv);

  // Append contact section to body
  main.appendChild(contactSection);
}

/***/ }),

/***/ "./src/components/jobs.js":
/*!********************************!*\
  !*** ./src/components/jobs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jobs: () => (/* binding */ jobs)
/* harmony export */ });
/* harmony import */ var _styles_jobsBlock_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/jobsBlock.css */ "./src/styles/jobsBlock.css");

function jobs() {
  var jobTitle = ["Fine dining chef", "Sous chef", "Pastry chef"];
  var jobDescription = ["We are looking for a fine dining chef to join our team. You will be responsible for creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine.", "We are looking for a sous chef to join our team. You will be responsible for assisting the head chef in creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine.", "We are looking for a pastry chef to join our team. You will be responsible for creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine."];
  var jobEmail = 'jobs@Fjordsmaken.com';
  var main = document.querySelector("main");
  var jobSection = document.createElement("section");
  jobSection.id = "job-section";
  jobSection.className = "container";
  main.appendChild(jobSection);
  var heading = document.createElement("h2");
  heading.textContent = "Join our team:";
  jobSection.appendChild(heading);
  for (var i = 0; i < jobTitle.length; i++) {
    // Create details element
    var details = document.createElement("details");

    // Create summary element
    var summary = document.createElement("summary");
    summary.innerHTML = "".concat(jobTitle[i], " <span></span>");

    // Create div element
    var div = document.createElement("div");

    // Create paragraph elements
    var paragraph1 = document.createElement("p");
    paragraph1.textContent = jobDescription[i];

    // Create paragraph elements
    var paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Email:\n        <a href=\"mailto:".concat(jobEmail, "\">").concat(jobEmail, "</a>");

    // Append elements
    jobSection.appendChild(details);
    details.appendChild(summary);
    details.appendChild(div);
    div.appendChild(paragraph1);
    div.appendChild(paragraph2);
  }
}

/***/ }),

/***/ "./src/components/jumboHeader.js":
/*!***************************************!*\
  !*** ./src/components/jumboHeader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jumboHeader: () => (/* binding */ jumboHeader)
/* harmony export */ });
/* harmony import */ var _styles_jumboHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/jumboHeader.css */ "./src/styles/jumboHeader.css");
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/restaurant.jpg */ "./src/assets/restaurant.jpg");
/* harmony import */ var _assets_arrow_see_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/arrow_see_menu.svg */ "./src/assets/arrow_see_menu.svg");



function jumboHeader() {
  var jumboHeaderContainer = document.querySelector("main");

  // Create section
  var createSection = document.createElement("section");
  createSection.setAttribute("id", "jumboHeader");
  createSection.classList.add("container");

  // Create div
  var createDiv = document.createElement("div");
  createDiv.classList.add("inner");

  // Create h2 element
  var createH2 = document.createElement("h1");
  createH2.textContent = "Discover the flavors of Norway at our authentic Norwegian cuisine Restaurant";

  // Create p element
  var createP = document.createElement("p");
  createP.textContent = "Indulge in traditional dishes made with the freshest locally sourced ingredient, expertly prepared to showcase the rich culinary heritage of Norway.";

  // Create anchor tag
  var createLink = document.createElement("a");
  createLink.setAttribute("href", "#menuSection");
  createLink.setAttribute("aria-label", "See menu");
  createLink.classList.add("menuLayer");

  // Create p element
  var createP2 = document.createElement("p");
  createP2.textContent = "See menu";
  createP2.classList.add("menuText");

  // Create img element
  var createImg = document.createElement("img");
  createImg.setAttribute("src", './arrow_see_menu.svg');
  createImg.classList.add("arrowMenu");

  // Create big img element
  var createBigImg = document.createElement("img");
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

/***/ }),

/***/ "./src/components/jumboHeaderAbout.js":
/*!********************************************!*\
  !*** ./src/components/jumboHeaderAbout.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jumboHeaderAbout: () => (/* binding */ jumboHeaderAbout)
/* harmony export */ });
/* harmony import */ var _styles_jumboHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/jumboHeader.css */ "./src/styles/jumboHeader.css");
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/restaurant.jpg */ "./src/assets/restaurant.jpg");
/* harmony import */ var _assets_arrow_see_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/arrow_see_menu.svg */ "./src/assets/arrow_see_menu.svg");



function jumboHeaderAbout() {
  var jumboHeaderContainer = document.querySelector("main");

  // Create section
  var createSection = document.createElement("section");
  createSection.setAttribute("id", "jumboHeader");
  createSection.classList.add("container");

  // Create div
  var createDiv = document.createElement("div");
  createDiv.classList.add("inner");

  // Create h2 element
  var createH2 = document.createElement("h2");
  createH2.textContent = "We are Fjordsmaken";

  // Create p element
  var createP = document.createElement("p");
  createP.textContent = "Indulge in traditional dishes made with the freshest locally sourced ingredient, expertly prepared to showcase the rich culinary heritage of Norway.";

  // Create big img element
  var createYoutubeVideo = document.createElement("iframe");
  createYoutubeVideo.classList.add("youtubeVideo");
  createYoutubeVideo.setAttribute("width", "100%");
  createYoutubeVideo.setAttribute("src", "https://www.youtube.com/embed/GlvoPLvpisg?start=143");
  createYoutubeVideo.setAttribute("frameborder", "0");
  createYoutubeVideo.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  createYoutubeVideo.setAttribute("allowfullscreen", true);

  // Create anchor tag
  var createLink = document.createElement("a");
  createLink.setAttribute("href", "#menuSection");
  createLink.classList.add("menuLayer");
  createDiv.appendChild(createH2);
  createDiv.appendChild(createP);
  createDiv.appendChild(createLink);
  jumboHeaderContainer.appendChild(createSection);
  createSection.appendChild(createDiv);
  createSection.appendChild(createYoutubeVideo);
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _assets_white_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/white-arrow.svg */ "./src/assets/white-arrow.svg");
/* harmony import */ var _assets_black_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/black-arrow.svg */ "./src/assets/black-arrow.svg");
/* harmony import */ var _assets_background_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/background_menu.svg */ "./src/assets/background_menu.svg");




function menu() {
  var menu = ["Appetizers", "Entrees", "Mains", "Desserts", "Drinks"];
  var amountOfMenuItems = [8, 10, 11, 7, 9];
  var main = document.querySelector("main");

  // Create section
  var createSection = document.createElement("section");
  createSection.setAttribute("id", "menuSection");
  main.appendChild(createSection);
  for (var i = 0; i < menu.length; i++) {
    var container = document.querySelector("#menuSection");

    // Create anchor (a) tag
    var createLink = document.createElement("a");
    createLink.setAttribute("href", "");
    createLink.classList.add("menu-layer");

    // Create div inside the anchor
    var createDiv = document.createElement("div");
    createDiv.classList.add("menu");
    createDiv.classList.add("container");

    // Create p element
    var createP = document.createElement("p");
    createP.textContent = "(".concat(amountOfMenuItems[i], ")");

    // Create h3 element
    var createH3 = document.createElement("h3");
    createH3.textContent = "".concat(menu[i]);

    // Create a div
    var createDivImg = document.createElement("div");
    createDivImg.classList.add("arrow");
    createDiv.appendChild(createP);
    createDiv.appendChild(createH3);
    createDiv.appendChild(createDivImg);
    createLink.appendChild(createDiv);
    container.appendChild(createLink);
  }
}

/***/ }),

/***/ "./src/components/menuList.js":
/*!************************************!*\
  !*** ./src/components/menuList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuList: () => (/* binding */ menuList)
/* harmony export */ });
/* harmony import */ var _styles_menuList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menuList.css */ "./src/styles/menuList.css");

function menuList() {
  var main = document.querySelector("main");
  var menu = ["Appetizers", "Entrees", "Mains", "Desserts", "Drinks"];
  var menuDescription = ["Start your meal with one of our delicious appetizers.", "Choose from a variety of entrees that will satisfy your taste buds.", "Our main dishes are made with fresh ingredients and are full of flavor.", "Finish your meal with one of our mouth-watering desserts.", "Quench your thirst with one of our refreshing drinks."];
  var amountOfMenuItems = [8, 10, 11, 7, 9];
  var menuItems = [
  // Appetizers
  "Garlic Bread", "Bruschetta", "Stuffed Mushrooms", "Caprese Salad", "Mozzarella Sticks", "Chicken Wings", "Spinach Artichoke Dip", "Fried Calamari",
  // Entrees
  "Grilled Chicken Caesar Salad", "Shrimp Scampi", "Beef Tacos", "Vegetarian Lasagna", "Spaghetti Bolognese", "Chicken Alfredo", "Grilled Salmon", "Stuffed Bell Peppers", "Lamb Chops", "BBQ Pulled Pork Sandwich",
  // Mains
  "Ribeye Steak", "Chicken Parmesan", "Beef Stroganoff", "Teriyaki Salmon", "Vegetarian Stir Fry", "Penne alla Vodka", "Grilled Swordfish", "Butter Chicken", "Seafood Paella", "BBQ Baby Back Ribs", "Vegan Buddha Bowl",
  // Desserts
  "Chocolate Lava Cake", "Tiramisu", "Cheesecake", "Apple Pie", "Crème Brûlée", "Ice Cream Sundae", "Churros with Chocolate Sauce",
  // Drinks
  "Iced Tea", "Lemonade", "Cappuccino", "Mango Smoothie", "Coca-Cola", "Red Wine", "White Wine", "Craft Beer", "Margarita"];
  var menuPrices = [
  // Appetizers
  "7.99", "8.99", "9.49", "7.49", "8.49", "9.99", "8.99", "10.49",
  // Entrees
  "12.99", "14.99", "11.99", "13.99", "15.49", "14.99", "18.99", "13.49", "22.99", "11.49",
  // Mains
  "24.99", "16.99", "18.49", "19.99", "15.99", "17.99", "20.99", "18.49", "21.99", "22.49", "14.99",
  // Desserts
  "7.99", "8.99", "7.49", "6.99", "9.49", "5.99", "6.99",
  // Drinks
  "3.99", "4.49", "4.99", "5.99", "2.99", "8.99", "8.99", "6.49", "9.99"];

  // Create section
  var createSection = document.createElement("section");
  createSection.setAttribute("id", "menuSection");
  main.appendChild(createSection);
  for (var i = 0; i < menu.length; i++) {
    var container = document.querySelector("#menuSection");

    // Create anchor (a) tag
    var createLink = document.createElement("div");
    createLink.classList.add("menuList-layer");

    // Create div inside the anchor
    var createDiv = document.createElement("div");
    createDiv.classList.add("menuList");
    createDiv.classList.add("container");

    // Create h3 element
    var createH3 = document.createElement("h3");
    createH3.textContent = "".concat(menu[i]);

    // Create p element
    var createP = document.createElement("p");
    createP.textContent = "".concat(menuDescription[i]);
    createDiv.appendChild(createH3);
    createDiv.appendChild(createP);
    createLink.appendChild(createDiv);
    container.appendChild(createLink);

    // Create div
    var createDivItems = document.createElement("div");
    createDivItems.classList.add("menuListItems");
    createDivItems.classList.add("containerSmall");
    createSection.appendChild(createDivItems);
    for (var j = 0; j < amountOfMenuItems[i]; j++) {
      // Create div
      var createDivItemsInner = document.createElement("div");
      createDivItemsInner.classList.add("menuListItems");

      // Create p element
      var createPItems = document.createElement("p");
      createPItems.textContent = "".concat(menuItems[j]);

      // Create p element
      var createPPrice = document.createElement("p");
      createPPrice.textContent = "$".concat(menuPrices[j]);
      createDivItems.appendChild(createDivItemsInner);
      createDivItemsInner.appendChild(createPItems);
      createDivItemsInner.appendChild(createPPrice);
    }
  }
}

/***/ }),

/***/ "./src/pages/aboutPage.js":
/*!********************************!*\
  !*** ./src/pages/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });
/* harmony import */ var _components_jobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/jobs */ "./src/components/jobs.js");
/* harmony import */ var _components_jumboHeaderAbout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/jumboHeaderAbout */ "./src/components/jumboHeaderAbout.js");


function aboutPage() {
  (0,_components_jumboHeaderAbout__WEBPACK_IMPORTED_MODULE_1__.jumboHeaderAbout)();
  (0,_components_jobs__WEBPACK_IMPORTED_MODULE_0__.jobs)();
}


/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contact */ "./src/components/contact.js");

function contactPage() {
  (0,_components_contact__WEBPACK_IMPORTED_MODULE_0__.contact)();
}


/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _components_jumboHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/jumboHeader */ "./src/components/jumboHeader.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.js");
// Import Components



// echo menu and jumboHeader
function homePage() {
  (0,_components_jumboHeader__WEBPACK_IMPORTED_MODULE_0__.jumboHeader)();
  (0,_components_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
}


/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _components_menuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/menuList */ "./src/components/menuList.js");

function menuPage() {
  (0,_components_menuList__WEBPACK_IMPORTED_MODULE_0__.menuList)();
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/contactBlock.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/contactBlock.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/background-image.svg */ "./src/assets/background-image.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#contactUs {
    margin-top: 40px;
    display: flex;
    gap: 40px;
}

#contactUs .content, #contactUs .form {
   width: 50%;
}

#contactUs .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#contactUs .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    border-radius: 20px;
    color: white;
}

#contactUs .form div label {
    padding-bottom: 10px;
}

#contactUs .form form .input {
   display: flex;
   flex-direction: column;
   gap: 5px
}

#contactUs .form input {
    padding: 10px;
    border-radius: 5px;
    border: none;
}

#contactUs .form textarea {
    padding: 10px;
    border-radius: 5px;
    border: none;
}

#contactUs .form button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    max-width: max-content;
    background-color: white;
    color: var(--red-color);
    padding: 10px 20px;
    font-weight: bold;
}

form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.social_media {
    display: flex;
    gap: 10px;
}

.social_media img {
    width: 25px;
    height: 25px;
}

@media (max-width: 768px) {
    #contactUs {
        flex-direction: column;
        gap: 20px;
    }

    #contactUs .content, #contactUs .form {
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/contactBlock.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;GACG,UAAU;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yDAA0D;IAC1D,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;GACG,aAAa;GACb,sBAAsB;GACtB;AACH;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,WAAW;IACf;AACJ","sourcesContent":["#contactUs {\r\n    margin-top: 40px;\r\n    display: flex;\r\n    gap: 40px;\r\n}\r\n\r\n#contactUs .content, #contactUs .form {\r\n   width: 50%;\r\n}\r\n\r\n#contactUs .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n#contactUs .form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    background-image: url('~/src/assets/background-image.svg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    color: white;\r\n}\r\n\r\n#contactUs .form div label {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#contactUs .form form .input {\r\n   display: flex;\r\n   flex-direction: column;\r\n   gap: 5px\r\n}\r\n\r\n#contactUs .form input {\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n}\r\n\r\n#contactUs .form textarea {\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n}\r\n\r\n#contactUs .form button {\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    max-width: max-content;\r\n    background-color: white;\r\n    color: var(--red-color);\r\n    padding: 10px 20px;\r\n    font-weight: bold;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.social_media {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.social_media img {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    #contactUs {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n\r\n    #contactUs .content, #contactUs .form {\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/jobsBlock.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/jobsBlock.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/arrow_down.svg */ "./src/assets/arrow_down.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `details {
    border-top: 1px solid black;
}

details:last-child {
    border-bottom: 1px solid black;
}

summary {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
}

#job-section h2 {
    margin-top: 40px;
    margin-bottom: 20px;
}

details div {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

details summary span {
    width: 15px;
    height: 15px;
    rotate: 180deg;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: contain;
    background-repeat: no-repeat;
    transition: 0.3s ease-in;
}

details[open] summary span {
    rotate: 0deg;
    transition: 0.3s ease-out;
}
`, "",{"version":3,"sources":["webpack://./src/styles/jobsBlock.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,yDAAoD;IACpD,wBAAwB;IACxB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B","sourcesContent":["details {\r\n    border-top: 1px solid black;\r\n}\r\n\r\ndetails:last-child {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\nsummary {\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n#job-section h2 {\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\ndetails div {\r\n    padding: 20px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\ndetails summary span {\r\n    width: 15px;\r\n    height: 15px;\r\n    rotate: 180deg;\r\n    background-image: url('~/src/assets/arrow_down.svg');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    transition: 0.3s ease-in;\r\n}\r\n\r\ndetails[open] summary span {\r\n    rotate: 0deg;\r\n    transition: 0.3s ease-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/jumboHeader.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/jumboHeader.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#jumboHeader {
    margin-top: 80px;
}
#jumboHeader .inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 100px;
    margin-bottom: 80px;
}

#jumboHeader .inner .menuText {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(270deg);
    white-space: nowrap;
    display: block;
    width: 100%;
    height: max-content;
    position: absolute;
    top: 60px;
    right: 20px;
}

#jumboHeader img {
    width: 100%;
    object-fit: cover;
}

.menuLayer {
    display: flex;
    position: relative;
}

.youtubeVideo {
    aspect-ratio: 16/9;
}

@media (max-width: 768px) {
    #jumboHeader {
        margin-top: 40px;
    }
    #jumboHeader .inner {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 0px;
    }

    #jumboHeader .inner .menuText {
        display: none;
    }

    img.arrowMenu {
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/jumboHeader.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,2BAA2B;IAC3B,4BAA4B;IAC5B,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,sBAAsB;QACtB,SAAS;QACT,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":["#jumboHeader {\r\n    margin-top: 80px;\r\n}\r\n#jumboHeader .inner {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 100px;\r\n    margin-bottom: 80px;\r\n}\r\n\r\n#jumboHeader .inner .menuText {\r\n    -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    transform: rotate(270deg);\r\n    white-space: nowrap;\r\n    display: block;\r\n    width: 100%;\r\n    height: max-content;\r\n    position: absolute;\r\n    top: 60px;\r\n    right: 20px;\r\n}\r\n\r\n#jumboHeader img {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.menuLayer {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n.youtubeVideo {\r\n    aspect-ratio: 16/9;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    #jumboHeader {\r\n        margin-top: 40px;\r\n    }\r\n    #jumboHeader .inner {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    #jumboHeader .inner .menuText {\r\n        display: none;\r\n    }\r\n\r\n    img.arrowMenu {\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/background_menu.svg */ "./src/assets/background_menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/white-arrow.svg */ "./src/assets/white-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/black-arrow.svg */ "./src/assets/black-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Menu */
:root {
    --transition: 0.4s ease-in-out;
}

#menuSection {
    margin-top: 40px;
}

.menu-layer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.menu-layer:hover {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--red-color);
}

.menu-layer:hover:nth-child(1) {
    background-position-y: 0px;
}

.menu-layer:hover:nth-child(2) {
    background-position-y: -120px;
}

.menu-layer:hover:nth-child(3) {
    background-position-y: -240px;
}

.menu-layer:hover:nth-child(4) {
    background-position-y: -360px;
}

.menu-layer:hover:nth-child(5) {
    background-position-y: -480px;
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid var(--dark-color);
    transition: var(--transition);
}

.menu:hover {
    height: 120px;
    color: var(--bg-color); 
}

.menu:hover .arrow {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.menu p, .menu h3 {
    font-weight: 800;
}

.arrow {
    width: 20px;
    height: 16px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    transition: var(--transition);
}

@media (max-width: 768px) {
    .menu-layer {
        flex-direction: column;
        gap: 20px;
    }

    .menu {
        height: 80px;
    }

    .menu-layer:hover {
        background-position-y: 0!important;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;IACtB,4BAA4B;IAC5B,kCAAkC;AACtC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,yDAAqD;AACzD;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yDAAqD;IACrD,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,kCAAkC;IACtC;AACJ","sourcesContent":["/* Menu */\r\n:root {\r\n    --transition: 0.4s ease-in-out;\r\n}\r\n\r\n#menuSection {\r\n    margin-top: 40px;\r\n}\r\n\r\n.menu-layer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.menu-layer:hover {\r\n    background-image: url('~/src/assets/background_menu.svg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--red-color);\r\n}\r\n\r\n.menu-layer:hover:nth-child(1) {\r\n    background-position-y: 0px;\r\n}\r\n\r\n.menu-layer:hover:nth-child(2) {\r\n    background-position-y: -120px;\r\n}\r\n\r\n.menu-layer:hover:nth-child(3) {\r\n    background-position-y: -240px;\r\n}\r\n\r\n.menu-layer:hover:nth-child(4) {\r\n    background-position-y: -360px;\r\n}\r\n\r\n.menu-layer:hover:nth-child(5) {\r\n    background-position-y: -480px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 80px;\r\n    border-bottom: 1px solid var(--dark-color);\r\n    transition: var(--transition);\r\n}\r\n\r\n.menu:hover {\r\n    height: 120px;\r\n    color: var(--bg-color); \r\n}\r\n\r\n.menu:hover .arrow {\r\n    background-image: url('~/src/assets/white-arrow.svg');\r\n}\r\n\r\n.menu p, .menu h3 {\r\n    font-weight: 800;\r\n}\r\n\r\n.arrow {\r\n    width: 20px;\r\n    height: 16px;\r\n    background-image: url('~/src/assets/black-arrow.svg');\r\n    background-repeat: no-repeat;\r\n    transition: var(--transition);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .menu-layer {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n\r\n    .menu {\r\n        height: 80px;\r\n    }\r\n\r\n    .menu-layer:hover {\r\n        background-position-y: 0!important;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menuList.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menuList.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/background_menu.svg */ "./src/assets/background_menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* menuList */
#menuSection {
    margin-top: 40px;
}

.menuList-layer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--red-color);
}

.menuList-layer:nth-child(1) {
    background-position-y: 0px;
}

.menuList-layer:nth-child(2) {
    background-position-y: -120px;
}

.menuList-layer:nth-child(3) {
    background-position-y: -240px;
}

.menuList-layer:nth-child(4) {
    background-position-y: -360px;
}

.menuList-layer:nth-child(5) {
    background-position-y: -480px;
}

.menuList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}

.menuList h3 {
    font-weight: 800;
    text-align: center;
    color: white;
}

.menuList p {
    color: white;
    margin-top: 10px;
    text-align: center;
}

.menuListItems {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid rgb(228, 228, 228);
    padding: 20px;
}

.menuListItems:last-child {
    border-bottom: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/menuList.css"],"names":[],"mappings":"AAAA,aAAa;AACb;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yDAAyD;IACzD,sBAAsB;IACtB,4BAA4B;IAC5B,kCAAkC;AACtC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;IACX,2CAA2C;IAC3C,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["/* menuList */\r\n#menuSection {\r\n    margin-top: 40px;\r\n}\r\n\r\n.menuList-layer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-image: url('~/src/assets/background_menu.svg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: var(--red-color);\r\n}\r\n\r\n.menuList-layer:nth-child(1) {\r\n    background-position-y: 0px;\r\n}\r\n\r\n.menuList-layer:nth-child(2) {\r\n    background-position-y: -120px;\r\n}\r\n\r\n.menuList-layer:nth-child(3) {\r\n    background-position-y: -240px;\r\n}\r\n\r\n.menuList-layer:nth-child(4) {\r\n    background-position-y: -360px;\r\n}\r\n\r\n.menuList-layer:nth-child(5) {\r\n    background-position-y: -480px;\r\n}\r\n\r\n.menuList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 120px;\r\n}\r\n\r\n.menuList h3 {\r\n    font-weight: 800;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.menuList p {\r\n    color: white;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.menuListItems {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    border-bottom: 2px solid rgb(228, 228, 228);\r\n    padding: 20px;\r\n}\r\n\r\n.menuListItems:last-child {\r\n    border-bottom: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/background-image.svg */ "./src/assets/background-image.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-color: #edede4;
  --red-color: #7f3828;
  --light-color: #b9ada5;
  --dark-color: #241a16;
}

body {
  font-family: "Manrope", sans-serif;
  background-color: var(--bg-color);
}

.container,
header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.containerSmall {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--dark-color);
}

a:hover {
  color: var(--red-color);
}

/* Header */
.logo span {
  width: 100%;
}

.logo span h2 {
  font-size: clamp(2rem, 14vw, 10rem);
  color: var(--red-color);
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
}

nav {
  display: flex;
  justify-content: space-between;
  color: var(--dark-color);
}

.left_nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.right_nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Popup header */

.hamburgerMenu {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .logo span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo span h2 {
    font-size: 2rem;
  }

  .hamburgerMenu {
    display: block;
  }
  .line {
    width: 30px;
    height: 3px;
    background-color: var(--red-color);
    margin: 5px;
  }
  .logo {
    position: relative;
    z-index: 1000;
    width: 100%;
  }

  .active nav {
    display: flex!important;
  }

  .popupMobile nav {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    gap: 40px;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    color: var(--dark-color);
    display: none;
  }

  .popupMobile nav button {
    font-size: 1.2rem;
    color: var(--red-color);
    font-weight: 700;
  }

  .left_nav {
    flex-direction: column;
  }

  .right_nav {
    flex-direction: column;
    gap: 10px;
  }
}

/* Footer */
footer {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--red-color);
  color: var(--bg-color);
  margin-top: 40px;
}

.logo_footer span {
  width: 100%;
}

.logo_footer span h2 {
  font-size: clamp(2rem, 14vw, 10rem);
  color: var(--bg-color);
  text-transform: uppercase;
}

.inner_footer {
  display: flex;
  gap: 60px;
  justify-content: flex-end;
}

.inner_footer div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inner_footer div a {
  color: var(--bg-color);
}

.footer_heading {
  padding-bottom: 10px;
}

.sub_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-bottom: 20px;
  font-size: 0.8rem;
}

.sub_footer a {
  color: var(--bg-color);
}

.sub_footer nav {
  display: flex;
  gap: 30px;
}

@media (max-width: 768px) {
  footer {
    padding-top: 40px;
  }

  button.logo_footer {
    display: flex;
    width: 100%;
}

  .logo_footer span h2 {
    font-size: 2rem;
  }

  .logo_footer span h2 {
    margin-bottom: 20px;
  }

  .inner_footer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .inner_footer div {
    align-items: center;
  }

  .sub_footer {
    flex-direction: column-reverse;
    gap: 20px;
    text-align: center;
  }

  .sub_footer nav {
    flex-direction: column;
    gap: 20px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;EAClC,iCAAiC;AACnC;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,WAAW;AACb;;AAEA;EACE,mCAAmC;EACnC,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;EACA;IACE,WAAW;IACX,WAAW;IACX,kCAAkC;IAClC,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,aAAa;IACb,WAAW;EACb;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,QAAQ;IACR,SAAS;IACT,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;EAClB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;IACtB,SAAS;EACX;AACF;;AAEA,WAAW;AACX;EACE,yDAA0D;EAC1D,sBAAsB;EACtB,4BAA4B;EAC5B,kCAAkC;EAClC,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mCAAmC;EACnC,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;AACf;;EAEE;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,8BAA8B;IAC9B,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;IACtB,SAAS;EACX;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-color: #edede4;\r\n  --red-color: #7f3828;\r\n  --light-color: #b9ada5;\r\n  --dark-color: #241a16;\r\n}\r\n\r\nbody {\r\n  font-family: \"Manrope\", sans-serif;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n.container,\r\nheader {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\n.containerSmall {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--dark-color);\r\n}\r\n\r\na:hover {\r\n  color: var(--red-color);\r\n}\r\n\r\n/* Header */\r\n.logo span {\r\n  width: 100%;\r\n}\r\n\r\n.logo span h2 {\r\n  font-size: clamp(2rem, 14vw, 10rem);\r\n  color: var(--red-color);\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  color: var(--dark-color);\r\n}\r\n\r\n.left_nav {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n.right_nav {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n/* Popup header */\r\n\r\n.hamburgerMenu {\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .logo span {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .logo span h2 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .hamburgerMenu {\r\n    display: block;\r\n  }\r\n  .line {\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--red-color);\r\n    margin: 5px;\r\n  }\r\n  .logo {\r\n    position: relative;\r\n    z-index: 1000;\r\n    width: 100%;\r\n  }\r\n\r\n  .active nav {\r\n    display: flex!important;\r\n  }\r\n\r\n  .popupMobile nav {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    inset: 0;\r\n    gap: 40px;\r\n    background-color: white;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: var(--dark-color);\r\n    display: none;\r\n  }\r\n\r\n  .popupMobile nav button {\r\n    font-size: 1.2rem;\r\n    color: var(--red-color);\r\n    font-weight: 700;\r\n  }\r\n\r\n  .left_nav {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .right_nav {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  background-image: url(\"~/src/assets/background-image.svg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-color: var(--red-color);\r\n  color: var(--bg-color);\r\n  margin-top: 40px;\r\n}\r\n\r\n.logo_footer span {\r\n  width: 100%;\r\n}\r\n\r\n.logo_footer span h2 {\r\n  font-size: clamp(2rem, 14vw, 10rem);\r\n  color: var(--bg-color);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.inner_footer {\r\n  display: flex;\r\n  gap: 60px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.inner_footer div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.inner_footer div a {\r\n  color: var(--bg-color);\r\n}\r\n\r\n.footer_heading {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sub_footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 40px;\r\n  padding-bottom: 20px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.sub_footer a {\r\n  color: var(--bg-color);\r\n}\r\n\r\n.sub_footer nav {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  footer {\r\n    padding-top: 40px;\r\n  }\r\n\r\n  button.logo_footer {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n  .logo_footer span h2 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .logo_footer span h2 {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .inner_footer {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .inner_footer div {\r\n    align-items: center;\r\n  }\r\n\r\n  .sub_footer {\r\n    flex-direction: column-reverse;\r\n    gap: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .sub_footer nav {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/contactBlock.css":
/*!*************************************!*\
  !*** ./src/styles/contactBlock.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contactBlock_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contactBlock.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/contactBlock.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contactBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contactBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contactBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contactBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/jobsBlock.css":
/*!**********************************!*\
  !*** ./src/styles/jobsBlock.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_jobsBlock_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./jobsBlock.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/jobsBlock.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_jobsBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_jobsBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_jobsBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_jobsBlock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/jumboHeader.css":
/*!************************************!*\
  !*** ./src/styles/jumboHeader.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_jumboHeader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./jumboHeader.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/jumboHeader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_jumboHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_jumboHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_jumboHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_jumboHeader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menuList.css":
/*!*********************************!*\
  !*** ./src/styles/menuList.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menuList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menuList.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menuList.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menuList_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menuList_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menuList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menuList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow_down.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow_down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow_down.svg";

/***/ }),

/***/ "./src/assets/arrow_see_menu.svg":
/*!***************************************!*\
  !*** ./src/assets/arrow_see_menu.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow_see_menu.svg";

/***/ }),

/***/ "./src/assets/background-image.svg":
/*!*****************************************!*\
  !*** ./src/assets/background-image.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background-image.svg";

/***/ }),

/***/ "./src/assets/background_menu.svg":
/*!****************************************!*\
  !*** ./src/assets/background_menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background_menu.svg";

/***/ }),

/***/ "./src/assets/black-arrow.svg":
/*!************************************!*\
  !*** ./src/assets/black-arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "black-arrow.svg";

/***/ }),

/***/ "./src/assets/facebook_icon.svg":
/*!**************************************!*\
  !*** ./src/assets/facebook_icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook_icon.svg";

/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.png";

/***/ }),

/***/ "./src/assets/instagram_icon.svg":
/*!***************************************!*\
  !*** ./src/assets/instagram_icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "instagram_icon.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurant.jpg";

/***/ }),

/***/ "./src/assets/twitter_icon.svg":
/*!*************************************!*\
  !*** ./src/assets/twitter_icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter_icon.svg";

/***/ }),

/***/ "./src/assets/white-arrow.svg":
/*!************************************!*\
  !*** ./src/assets/white-arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "white-arrow.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/homePage */ "./src/pages/homePage.js");
/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menuPage */ "./src/pages/menuPage.js");
/* harmony import */ var _pages_aboutPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/aboutPage */ "./src/pages/aboutPage.js");
/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contactPage */ "./src/pages/contactPage.js");


// Import svg


// Import Favicon


// Import pages




function loadPages(val) {
  var content = document.querySelector("main");
  content.innerHTML = ""; // Clear the content before loading a new page

  if (val === "home") {
    (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_3__.homePage)();
  } else if (val === "menu") {
    (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_4__.menuPage)();
  } else if (val === "about") {
    (0,_pages_aboutPage__WEBPACK_IMPORTED_MODULE_5__.aboutPage)();
  } else if (val === "contact") {
    (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_6__.contactPage)();
  }
}

// Make loadPages available globally
window.loadPages = loadPages;
loadPages("home");

// Open popup
function togglePopup() {
  var popup = document.querySelector('.popupMobile');
  if (popup) {
    popup.classList.toggle('active');
  }
}
/******/ })()
;
//# sourceMappingURL=bundle 49ccee87cd9f18e6977e.js.map