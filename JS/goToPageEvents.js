let homeButton = document.getElementById("home")
homeButton.addEventListener("click", goToHomePage)

async function goToHomePage() {
  document.location = "/"
}

let contactInfoButton = document.getElementById("contact")
contactInfoButton.addEventListener("click", goToContactPage)

function goToContactPage() {
  document.location.href = "/HTML/contactpage"
}

let aboutMeButton = document.getElementById("about")
aboutMeButton.addEventListener("click", goToAboutMePage)

function goToAboutMePage() {
  document.location.href = "/HTML/aboutmepage"
}