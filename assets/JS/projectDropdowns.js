// Dropdown functionality on projects
let currentDropdown = null

export function projectDropDown(project) {
  let idNum = project.id.slice(-1);
  let dropDown = document.getElementById("dropDown" + idNum);

  // Reset previous project header and dropdown
  if (currentDropdown) {
    let currentProject = document.getElementById(
      "project" + currentDropdown.id.slice(-1)
    );
    currentProject.classList.remove("active"); // Remove the "active" class
    currentDropdown.style.display = "none";
  }

  // Show or hide the chosen dropdown
  if (dropDown !== currentDropdown) {
    dropDown.style.display = "block";
    project.classList.add("active"); // Add the "active" class
    currentDropdown = dropDown;
  } else {
    dropDown.style.display = "none";
    currentDropdown = null;
  }
}

export function scrollIntoView(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"})
}
