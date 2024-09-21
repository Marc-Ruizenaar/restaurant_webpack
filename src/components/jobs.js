import "../styles/jobsBlock.css";

export function jobs() {
  const jobTitle = ["Fine dining chef", "Sous chef", "Pastry chef"];
  const jobDescription = [
    "We are looking for a fine dining chef to join our team. You will be responsible for creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine.",
    "We are looking for a sous chef to join our team. You will be responsible for assisting the head chef in creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine.",
    "We are looking for a pastry chef to join our team. You will be responsible for creating a unique dining experience for our guests. You will be working with a team of talented chefs to create a seasonal menu that showcases the best of Norwegian cuisine."
  ];
  const jobEmail = 'jobs@Fjordsmaken.com';
  
  const main = document.querySelector("main");
  const jobSection = document.createElement("section");
  jobSection.id = "job-section";
  jobSection.className = "container";
  main.appendChild(jobSection);

  const heading = document.createElement("h2");
  heading.textContent = "Join our team:";
  jobSection.appendChild(heading);

  for (let i = 0; i < jobTitle.length; i++) {
    // Create details element
    const details = document.createElement("details");

    // Create summary element
    const summary = document.createElement("summary");
    summary.innerHTML = `${jobTitle[i]} <span></span>`;

    // Create div element
    const div = document.createElement("div");

    // Create paragraph elements
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = jobDescription[i];

    // Create paragraph elements
    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = `Email:
        <a href="mailto:${jobEmail}">${jobEmail}</a>`;

    // Append elements
    jobSection.appendChild(details);
    details.appendChild(summary);
    details.appendChild(div);
    div.appendChild(paragraph1);
    div.appendChild(paragraph2);
  }
}
