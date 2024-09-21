import "../styles/contactBlock.css";

// Import images
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";

export function contact() {
    const main = document.querySelector("main");

    // Create contact section
    const contactSection = document.createElement("section");
    contactSection.id = "contactUs";
    contactSection.className = "container";

    // Create content div
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    // Add heading
    const heading = document.createElement("h2");
    heading.textContent = "Contact us";

    // Add paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent =
        "We are always happy to hear from you. If you have any questions or suggestions, please feel free to contact us.";

    // Add phone link
    const phoneLink = document.createElement("a");
    phoneLink.href = "tel:+31628672650";
    phoneLink.textContent = "+31 6 286 726 50";

    // Add email link
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:hi@fjordsmaken.com";
    emailLink.textContent = "hi@fjordsmaken.com";

    // Create social media div
    const socialMediaDiv = document.createElement("div");
    socialMediaDiv.className = "social_media";

    // Add Facebook link
    const facebookLink = document.createElement("a");
    facebookLink.href = "";
    const facebookImg = document.createElement("img");
    facebookImg.src = facebook;
    facebookImg.alt = "Facebook";
    facebookLink.appendChild(facebookImg);

    // Add Instagram link
    const instagramLink = document.createElement("a");
    instagramLink.href = "";
    const instagramImg = document.createElement("img");
    instagramImg.src = instagram;
    instagramImg.alt = "Instagram";
    instagramLink.appendChild(instagramImg);

    // Add Twitter link
    const twitterLink = document.createElement("a");
    twitterLink.href = "";
    const twitterImg = document.createElement("img");
    twitterImg.src = twitter;
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
    const formDiv = document.createElement("div");
    formDiv.className = "form";

    // Create form
    const form = document.createElement("form");
    form.action = "";

    // Add name input
    const nameInputDiv = document.createElement("div");
    nameInputDiv.className = "input";
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Full name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInputDiv.appendChild(nameLabel);
    nameInputDiv.appendChild(nameInput);

    // Add email input
    const emailInputDiv = document.createElement("div");
    emailInputDiv.className = "input";
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
    emailInputDiv.appendChild(emailLabel);
    emailInputDiv.appendChild(emailInput);

    // Add message input
    const messageInputDiv = document.createElement("div");
    messageInputDiv.className = "input";
    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "message";
    messageLabel.textContent = "Message";
    const messageTextarea = document.createElement("textarea");
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageInputDiv.appendChild(messageLabel);
    messageInputDiv.appendChild(messageTextarea);

    // Add submit button
    const submitButton = document.createElement("button");
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
