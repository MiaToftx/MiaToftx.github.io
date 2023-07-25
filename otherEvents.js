// Scroll to projects when "Browse portfolio" btn is clicked. 
let browsePortfolioButton = document.getElementById("browse")
browsePortfolioButton.addEventListener("click", scrollToFooter)

function scrollToFooter() {
  document.getElementById("footer").scrollIntoView({behavior: "smooth"})
}

//Go to contact page when "Contact me" or "Contact Info" btn is clicked.
let contactMeButton = document.getElementById("contactBtn")
contactMeButton.addEventListener("click", goToContactPage)

async function goToContactPage() {
  document.location.href = "/assets/HTML/contactpage.html"
}
