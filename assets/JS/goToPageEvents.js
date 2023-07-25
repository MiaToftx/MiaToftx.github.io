let homeButton = document.getElementById("home")
homeButton.addEventListener("click", goToHomePage)

async function goToHomePage() {
  document.location = "/assets/HTML/frontpage.html"
}

let contactInfoButton = document.getElementById("contact")
contactInfoButton.addEventListener("click", goToContactPage)

function goToContactPage() {
  document.location.href = "/assets/HTML/contactpage.html"
}

let aboutMeButton = document.getElementById("about")
aboutMeButton.addEventListener("click", goToAboutMePage)

function goToAboutMePage() {
  document.location.href = "/assets/HTML/aboutmepage.html"
}