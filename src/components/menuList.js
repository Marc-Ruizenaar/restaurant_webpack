import "../styles/menuList.css";

export function menuList() {
  const main = document.querySelector("main");

  let menu = ["Appetizers", "Entrees", "Mains", "Desserts", "Drinks"];
  let menuDescription = [
    "Start your meal with one of our delicious appetizers.",
    "Choose from a variety of entrees that will satisfy your taste buds.",
    "Our main dishes are made with fresh ingredients and are full of flavor.",
    "Finish your meal with one of our mouth-watering desserts.",
    "Quench your thirst with one of our refreshing drinks.",
  ];
  let amountOfMenuItems = [8, 10, 11, 7, 9];

  const menuItems = [
    // Appetizers
    "Garlic Bread",
    "Bruschetta",
    "Stuffed Mushrooms",
    "Caprese Salad",
    "Mozzarella Sticks",
    "Chicken Wings",
    "Spinach Artichoke Dip",
    "Fried Calamari",

    // Entrees
    "Grilled Chicken Caesar Salad",
    "Shrimp Scampi",
    "Beef Tacos",
    "Vegetarian Lasagna",
    "Spaghetti Bolognese",
    "Chicken Alfredo",
    "Grilled Salmon",
    "Stuffed Bell Peppers",
    "Lamb Chops",
    "BBQ Pulled Pork Sandwich",

    // Mains
    "Ribeye Steak",
    "Chicken Parmesan",
    "Beef Stroganoff",
    "Teriyaki Salmon",
    "Vegetarian Stir Fry",
    "Penne alla Vodka",
    "Grilled Swordfish",
    "Butter Chicken",
    "Seafood Paella",
    "BBQ Baby Back Ribs",
    "Vegan Buddha Bowl",

    // Desserts
    "Chocolate Lava Cake",
    "Tiramisu",
    "Cheesecake",
    "Apple Pie",
    "Crème Brûlée",
    "Ice Cream Sundae",
    "Churros with Chocolate Sauce",

    // Drinks
    "Iced Tea",
    "Lemonade",
    "Cappuccino",
    "Mango Smoothie",
    "Coca-Cola",
    "Red Wine",
    "White Wine",
    "Craft Beer",
    "Margarita",
  ];

  const menuPrices = [
    // Appetizers
    "7.99",
    "8.99",
    "9.49",
    "7.49",
    "8.49",
    "9.99",
    "8.99",
    "10.49",

    // Entrees
    "12.99",
    "14.99",
    "11.99",
    "13.99",
    "15.49",
    "14.99",
    "18.99",
    "13.49",
    "22.99",
    "11.49",

    // Mains
    "24.99",
    "16.99",
    "18.49",
    "19.99",
    "15.99",
    "17.99",
    "20.99",
    "18.49",
    "21.99",
    "22.49",
    "14.99",

    // Desserts
    "7.99",
    "8.99",
    "7.49",
    "6.99",
    "9.49",
    "5.99",
    "6.99",

    // Drinks
    "3.99",
    "4.49",
    "4.99",
    "5.99",
    "2.99",
    "8.99",
    "8.99",
    "6.49",
    "9.99",
  ];

  // Create section
  const createSection = document.createElement("section");
  createSection.setAttribute("id", "menuSection");
  main.appendChild(createSection);

  for (let i = 0; i < menu.length; i++) {
    const container = document.querySelector("#menuSection");

    // Create anchor (a) tag
    const createLink = document.createElement("div");
    createLink.classList.add("menuList-layer");

    // Create div inside the anchor
    const createDiv = document.createElement("div");
    createDiv.classList.add("menuList");
    createDiv.classList.add("container");

    // Create h3 element
    const createH3 = document.createElement("h3");
    createH3.textContent = `${menu[i]}`;

    // Create p element
    const createP = document.createElement("p");
    createP.textContent = `${menuDescription[i]}`;

    createDiv.appendChild(createH3);
    createDiv.appendChild(createP);
    createLink.appendChild(createDiv);
    container.appendChild(createLink);

    // Create div
    const createDivItems = document.createElement("div");
    createDivItems.classList.add("menuListItems");
    createDivItems.classList.add("containerSmall");

    createSection.appendChild(createDivItems);

    for (let j = 0; j < amountOfMenuItems[i]; j++) {
      // Create div
      const createDivItemsInner = document.createElement("div");
      createDivItemsInner.classList.add("menuListItems");

      // Create p element
      const createPItems = document.createElement("p");
      createPItems.textContent = `${menuItems[j]}`;

      // Create p element
      const createPPrice = document.createElement("p");
      createPPrice.textContent = `$${menuPrices[j]}`;

      createDivItems.appendChild(createDivItemsInner);
      createDivItemsInner.appendChild(createPItems);
      createDivItemsInner.appendChild(createPPrice);
    }
  }
}
