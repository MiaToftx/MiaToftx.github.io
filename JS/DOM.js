// Import necessary functions from other modules
import { projectDropDown, scrollIntoView } from "./projectDropdowns.js";
import { showSlides } from "./projectPictureSlideshow.js";

// Define an array of projects with their details
const projectsList = [
    //Project 1 details
    {
      id: 1,
      name: "1. Portfolio Website",
      descriptionHeader: "An Online Gallery of My Best Projects",
      description:
      "With this project, I have been challenged in terms of my creativity and sense of aesthetics. " +
      "It has been a fun project, although a little outside of my comfort zone. " +
      "The project has been developed using HTML, CSS, and Javascript. " +
      "These are all technologies I have studied during my 3rd semester, and have now put into practice. " +
      "I have placed a great emphasis on writing organized and readable code, creating thorough documentation, " +
      "and providing explanatory comments where necessary.",
      largeImages: [
        "./images/portfolioProject/project1image1.jpg",
        "./images/portfolioProject/project1image2.jpg",
        "./images/portfolioProject/project1image3.jpg"
      ],
      smallImages: [
        "./images/portfolioProject/project1image1small.jpg",
        "./images/portfolioProject/project1image2small.jpg",
        "./images/portfolioProject/project1image3small.jpg"
      ],
      newSkills: [
        "HTML", "CSS", "Javascript", "Frontend development", "Functional programming"
      ],
      oldSkills: [
        "Writing understandable code", "Avoid code duplication", "Write valuable documentation"
      ],
      gitHubLink: "https://github.com/MiaToftx/Portfolio-Website"
    },
    //Project 2 details
    {
      id: 2,
      name: "2. MoodTracker Project",
      descriptionHeader: "A Website for Tracking your Mood, Stress Levels and Submit Good Experiences",
      description: "With this project i have challenged myself with using technologies i have no previous experience with. " +
      "I have used React, Bootstrap, MongoDB and Spring Boot for the first time, and had a great experience learning new skills. " +
      "But this project has also strengthened my current skillset in Java, " +
      "Javascript, HTML and CSS. This project provided hands-on experience in crafting a user-friendly application " +
      "with a special emphasis on emotional health.",
      largeImages: [
        "./images/portfolioProject/project2image1.jpg",
        "./images/portfolioProject/project2image2.jpg",
        "./images/portfolioProject/project2image3.jpg"
      ],
      smallImages: [
        "./images/portfolioProject/project2image1.jpg",
        "./images/portfolioProject/project2image2.jpg",
        "./images/portfolioProject/project2image3.jpg"
      ],
      newSkills: [
        "Spring Boot", "MongoDB Compass", "Postman", "React", "Bootstrap", "Node.js"
      ],
      oldSkills: [
        "Java", "Javascript", "CSS", "Frontend Development", "Creating an API", "Writing clean code", "Avoiding code duplication", "Writing valuable documentation"
      ],
      gitHubLink: "https://github.com/MiaToftx/MoodTrackerProject"
    },
    //Project 3 details
    {
      id: 3,
      name: "3. Upcoming Project",
      descriptionHeader: "Upcoming project in the making",
      description: "I am always working on something - so i have either already started on my next project, or i am planning to start one.",
      largeImages: [
    
      ],
      smallImages: [
        
      ],
      newSkills: [
        
      ],
      oldSkills: [
        
      ],
      gitHubLink: "https://github.com/MiaToftx"
    },
]

// Function to split a list into chunks of a specified size
function splitListIntoChunks(list, chunkSize) {
  const chunks = [];
  let i = 0;

  while (i < list.length) {
    // Split the list into chunks of size `chunkSize`
    chunks.push(list.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return chunks;
}

// Split projectsList into groups of three
let threeProjectsGrouped = splitListIntoChunks(projectsList, 3);

// Get the footer element
let footer = document.getElementById("footer");

// Function to create project containers in the footer
function createProjectContainers(list) {
  let i = 1;
  for (let element of list) {
    // Create a div element for each project and set its class and id
    let container = document.createElement("div");
    container.className = "projectContainer";
    container.id = "projectContainer" + i;

    // Append the container to the footer
    footer.appendChild(container);
    i++;
  }
}

// Function to create project headers
function createProjectHeaders(list, container) {
  for (let project of list) {
    // Create a div element for each project header and set its class and id
    let projectTab = document.createElement("div");
    projectTab.id = "project" + project.id;
    projectTab.className = "project";

    // Create a paragraph element to display the project name
    let projectName = document.createElement("p");
    projectName.innerHTML = project.name;
    projectName.className = "projectInfo";

    // Append the project name to the project header
    projectTab.appendChild(projectName);

    // Append the project header to the specified container
    container.appendChild(projectTab);
  }
}

// Function to create dropdowns for each project
function createDropdowns(list, container) {
  for(let project of list) {
      // Create a div element for each dropdown and set its class and id
      let dropDown = document.createElement("div")
      dropDown.id = "dropDown" + project.id
      dropDown.className = "dropDown"
    
      let projectDropDown = document.createElement("div")
      projectDropDown.id = "p" + project.id + "drop"
      projectDropDown.className = "pDrop"
    
      // Create a div element to hold the left side of the dropdown content
      let leftSideOfDropDown = document.createElement("div")
      leftSideOfDropDown.id = "leftDrop" + project.id
      leftSideOfDropDown.className = "leftDrop"

      // Create a div element to hold the project description
      let descriptionSegment = document.createElement("div")
      descriptionSegment.id = "description"

      // Create a header element to display the project description header
      let descriptionHeader = document.createElement("h3")
      descriptionHeader.id = "descriptionHeader"
      descriptionHeader.innerHTML = project.descriptionHeader

      // Append the description header to the description segment
      descriptionSegment.appendChild(descriptionHeader)
    
      // Create a div element to hold additional information about the project
      let infoSegment = document.createElement("div")
      infoSegment.id = "extraInfo"
      let infoHeader = document.createElement("h3")
      infoHeader.id = "infoHeader"
      infoHeader.innerHTML = "Skills Learned or Improved"

      // Append the "Skills Learned or Improved" header to the info segment
      infoSegment.appendChild(infoHeader)
    
      // Create a div element to hold the right side of the dropdown content
      let rightSideOfDropDown = document.createElement("div")
      rightSideOfDropDown.id = project.id
      rightSideOfDropDown.className = "rightDrop"

      // Create a div element to hold the footer segment of the dropdown
      let footerSegment = document.createElement("div")
      footerSegment.id = "dropDownFooter"
      
      // Append the description segment to the left side of the dropdown and add the project description
      leftSideOfDropDown.appendChild(descriptionSegment)
      createProjectDescription(descriptionSegment, project)

      // Append a picture slideshow to the right side of the dropdown
      createSlider(rightSideOfDropDown, project)

      // Append the info segment and project skills to the footer of the dropdown
      footerSegment.appendChild(infoSegment)
      createProjectSkills(infoSegment, project)
      createGitHubLink(infoSegment, project)

      // Append the left side, right side and the footer of the dropdown to the main dropdown element
      projectDropDown.appendChild(leftSideOfDropDown)
      projectDropDown.appendChild(rightSideOfDropDown)
      projectDropDown.appendChild(footerSegment)
      dropDown.appendChild(projectDropDown)

      // Append the dropdown to the specified container
      container.appendChild(dropDown)
  }
}


// Function to create an image slideshow for a project
function createSlider(container, project) {
  // Create a header element for the slideshow
  let header = document.createElement("div");
  header.id = "outerPictureSliderContainer";

  // Create a container element for the images
  let sliderContainer = document.createElement("div");
  sliderContainer.id = "innerPictureSliderContainer";
  header.appendChild(sliderContainer);

  // Determine whether to use large or small images based on the screen width
  let images = null;
  if (window.innerWidth >= 768) {
    images = project.largeImages;
  } else {
    images = project.smallImages;
  }

  // Create an image element for each image in the project's image gallery
  for (let i = 0; i < images.length; i++) {
    let sliderItem = document.createElement("img");
    sliderItem.className = "pictureSliderItem";
    sliderItem.src = images[i];
    sliderContainer.appendChild(sliderItem);
  }

  // Create a container element for the dots (indicators) of the slideshow
  let dots = document.createElement("div");
  dots.id = "pictureDotsContainer";
  header.appendChild(dots);

  // Create a dot (indicator) element for each image in the slideshow
  for (let j = 0; j < images.length; j++) {
    let dot = document.createElement("span");
    dot.className = "pictureDot";
    dot.id = "pictureDot" + (j + 1);
    dots.appendChild(dot);
  }

  // Append the header (slideshow) to the specified container
  container.appendChild(header);
}

// Function to create project description
function createProjectDescription(container, project) {
  // Create a paragraph element to display the project description
  let description = document.createElement("p");
  description.className = "projectDescriptionP";
  description.innerHTML = project.description;

  // Append the project description to the specified container
  container.appendChild(description);
}

// Function to create lists of project skills
function createProjectSkills(container, project) {
  // Create a div element to hold the outer project skills segment
  let outerProjectSkillsSegment = document.createElement("div");
  outerProjectSkillsSegment.className = "outerProjectSkillsSegment";

  // Create a div element to hold the list of learned skills
  let learnedSkillsSegment = document.createElement("div");
  learnedSkillsSegment.className = "learnedSkillsSegment";

  // Create a div element to hold the list of improved skills
  let improvedSkillsSegment = document.createElement("div");
  improvedSkillsSegment.className = "improvedSkillsSegment";

  // Create a list element for each new skill learned during the project
  for (let element of project.newSkills) {
    let learnedSkill = document.createElement("div");
    learnedSkill.className = "learnedSkills";
    learnedSkill.innerHTML = "- " + element;

    // Append the learned skill to the learned skills segment
    learnedSkillsSegment.appendChild(learnedSkill);
  }

  // Create a list element for each existing skill improved during the project
  for (let element of project.oldSkills) {
    let improvedSkill = document.createElement("div");
    improvedSkill.className = "improvedSkills";
    improvedSkill.innerHTML = "- " + element;

    // Append the improved skill to the improved skills segment
    improvedSkillsSegment.appendChild(improvedSkill);
  }

  // Append the learned and improved skills segments to the outer project skills segment
  outerProjectSkillsSegment.appendChild(learnedSkillsSegment);
  outerProjectSkillsSegment.appendChild(improvedSkillsSegment);

  // Append the outer project skills segment to the specified container
  container.appendChild(outerProjectSkillsSegment);
}

// Function to create a link to the project's GitHub repository
function createGitHubLink(container, project) {
  // Create a div element to hold the GitHub link segment
  let githubLinkSegment = document.createElement("div");
  githubLinkSegment.className = "githubLinkSegment";

  // Create a paragraph element to display the "Find the project directly on" text
  let goToLinkP = document.createElement("p");
  goToLinkP.className = "goToLinkParagraph";
  goToLinkP.innerHTML = "Find the project directly on ";

  // Create an anchor element for the GitHub link
  let gitHubLink = document.createElement("a");
  gitHubLink.href = project.gitHubLink;
  gitHubLink.target = "_blank";

  // Create an image element for the GitHub logo
  let gitHubImg = document.createElement("img");
  gitHubImg.className = "projectLinkGitHub";
  gitHubImg.src = "./images/GitHub-logo.jpeg";

  // Append the GitHub logo to the GitHub link
  gitHubLink.appendChild(gitHubImg);

  // Append the "Find the project directly on" text and the GitHub link to the GitHub link segment
  githubLinkSegment.appendChild(goToLinkP);
  githubLinkSegment.appendChild(gitHubLink);

  // Append the GitHub link segment to the specified container
  container.appendChild(githubLinkSegment);
}

// Function to register click event listeners for project headers
function registerProjectEventListeners() {
  let projects = Array.from(document.getElementsByClassName("project"));

  for (let project of projects) {
    // Add click event listeners for each project header
    project.addEventListener("click", (event) => {
      // Trigger the projectDropDown function on click
      projectDropDown(project);
    });
    project.addEventListener("click", (event) => {
      // Scroll the page to the clicked project
      scrollIntoView(project.id);
    });
  }
}

// Function to create image slideshows for projects
function createSlideShowForProjects() {
  let dropDowns = Array.from(document.getElementsByClassName("dropDown"));
  for (let element of dropDowns) {
    // Show the slides for each dropdown (project)
    showSlides(element.id);
  }
}

// Function to create DOM elements for normal screen size (wider than or equal to 768 pixels)
function createDomForNormalScreenSize() {
  // Create project containers for each group of three projects
  createProjectContainers(threeProjectsGrouped);

  // Get all the project containers
  let projectContainers = document.getElementsByClassName("projectContainer");
  let i = 0;

  // Loop through each group of three projects
  for (let element of threeProjectsGrouped) {
    // Create project headers, dropdowns, and image slideshows for each project in the group
    createProjectHeaders(element, projectContainers[i]);
    createDropdowns(element, projectContainers[i]);
    i++;
  }

  // Register click event listeners for the project headers
  registerProjectEventListeners();

  // Create image slideshows for projects
  createSlideShowForProjects();
}

// Function to create DOM elements for small screen size (narrower than 768 pixels)
function createDomForSmallScreenSize() {
  // Create project containers for each individual project
  createProjectContainers(projectsList);

  // Get all the project containers
  let projectContainers = document.getElementsByClassName("projectContainer");
  let i = 0;

  // Loop through each individual project
  for (let element of projectsList) {
    // Create project headers, dropdowns, and image slideshows for each project
    createProjectHeaders([element], projectContainers[i]);
    createDropdowns([element], projectContainers[i]);
    i++;
  }

  // Register click event listeners for the project headers
  registerProjectEventListeners();

  // Create image slideshows for projects
  createSlideShowForProjects();
}

// Function to check the screen size and adjust the DOM layout accordingly
function checkScreenSize() {
  // Remove existing project containers from the footer
  while (footer.firstChild) {
    footer.removeChild(footer.firstChild);
  }

  // Check the screen size and create the appropriate DOM layout
  if (window.innerWidth >= 768) {
    createDomForNormalScreenSize();
  } else {
    createDomForSmallScreenSize();
  }
}

// Call the function on page load
window.addEventListener("load", checkScreenSize);

// Call the function on window resize
window.addEventListener("resize", checkScreenSize);