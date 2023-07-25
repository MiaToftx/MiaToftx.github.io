const characteristics = [
    "Ambitious",
    "Driven",
    "Outgoing",
    "Teamplayer",
    "Independent",
    "Social",
    "Detail oriented",
    "Problem-solving",
    "Creative"
]
  
const tools = [
    "Java",
    "Javascript",
    "HTML and CSS",
    "Express",
    "Templating",
    "SQL",
    "Firebase",
    "UML",
    "Agile development",
    "Jira",
    "Git"
]
  
const grades = [
    "First year exam: 12",
    "Software development methods: 10",
    "Programming, distribution, integration and security: 10"
]
  

function createSkillsSegment() {
    // Create the aboutRight element
    let aboutRight = document.createElement("div");
    aboutRight.id = "aboutRight";

    // Create the skillsContainer element
    let skillsContainer = document.createElement("div");
    skillsContainer.id = "skillsContainer";
    aboutRight.appendChild(skillsContainer);

    // Create the skillsHeaderContainer element
    let skillsHeaderContainer = document.createElement("div");
    skillsHeaderContainer.id = "skillsHeaderContainer";
    skillsContainer.appendChild(skillsHeaderContainer);

    // Create the skillsHeader element
    let skillsHeader = document.createElement("h2");
    skillsHeader.id = "skillsHeader";
    skillsHeader.innerHTML = "Skills and achievements";
    skillsHeaderContainer.appendChild(skillsHeader);

    // Create the skillElementsContainer element
    let skillElementsContainer = document.createElement("div");
    skillElementsContainer.id = "skillElementsContainer";
    skillsContainer.appendChild(skillElementsContainer);

    // Language section
    let languageHeader = createHeaderElement("Language");
    let danishSkill = createSkillElement("Danish");
    let danishSkillBar = createSkillBarElement("fillDanish");
    let englishSkill = createSkillElement("English");
    let englishSkillBar = createSkillBarElement("fillEnglish");

    // Characteristics section
    let characteristicsHeader = createHeaderElement('Characteristics');
    let characteristicsSkills = characteristics.map((characteristic) => createSkillElement(characteristic));

    // Tools section
    let toolsHeader = createHeaderElement('Tools');
    let toolsSkills = tools.map((tool) => createSkillElement(tool));

    // Grades section
    let gradesHeader = createHeaderElement('Grades');
    let gradesSkills = grades.map((grade) => createSkillElement(grade));

    // Append elements to skillElementsContainer
    appendElements(skillElementsContainer, [
        languageHeader,
        danishSkill,
        danishSkillBar,
        englishSkill,
        englishSkillBar,
        document.createElement('div'), // Empty div for spacing
        characteristicsHeader,
        ...characteristicsSkills,
        toolsHeader,
        ...toolsSkills,
        gradesHeader,
        ...gradesSkills
    ]);

    // Helper function to create header elements
    function createHeaderElement(text) {
        const header = document.createElement("h2");
        header.id = text.toLowerCase() + "Header";
        header.innerHTML = text;
        return header;
    }

    // Helper function to create skill elements
    function createSkillElement(text) {
        const skill = document.createElement("div");
        skill.className = "skill"
        skill.innerHTML = text;
        return skill;
    }

    // Helper function to create skill bar elements
    function createSkillBarElement(fillId) {
        const skillBar = document.createElement("div");
        skillBar.className = "skillBar"

        const bar = document.createElement("div");
        bar.className = "bar"

        const fill = document.createElement("div");
        fill.className = "fill"
        fill.id = fillId;

        bar.appendChild(fill);
        skillBar.appendChild(bar);

        return skillBar;
    }

    // Helper function to append multiple elements to a container
    function appendElements(container, elements) {
        elements.forEach((element) => {
            container.appendChild(element);
        })
    }

    // Append the aboutRight section to the document body or any desired parent element
    document.getElementById("flexContainer").appendChild(aboutRight);

}

createSkillsSegment()