function createGlobalSlide() {
  // Create the header element
  let header = document.createElement("div");
  header.id = "header";

  // Create the slider container element
  let sliderContainer = document.createElement("div");
  sliderContainer.id = "sliderContainer";
  header.appendChild(sliderContainer);

  // Create the slider items
  let sliderItems = [
    '\"I’m not a great programmer; I’m just a good programmer with great habits.\" by Kent Beck',
    '\"I have not failed. I’ve just found 10,000 ways that won’t work.\" by Thomas Edison',
    '\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" by Martin Fowler'
  ]

  sliderItems.forEach((item) => {
    let sliderItem = document.createElement("p");
    sliderItem.className = "sliderItem";
    sliderItem.innerHTML = item
    sliderContainer.appendChild(sliderItem);
  })

  // Create the dots container
  const dotsContainer = document.createElement('div');
  dotsContainer.id = 'dots';
  header.appendChild(dotsContainer);

  // Create the dots
  for (let i = 0; i < sliderItems.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.id = "dot" + (i + 1);
    dotsContainer.appendChild(dot);
  }

  // Append the header to the document body
  document.body.appendChild(header);

}

createGlobalSlide()

//Slideshow
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = Array.from(document.getElementsByClassName("sliderItem"))
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides()


