export function showSlides(dropdownId) {
    let slideIndex = 0;
    let slides = Array.from(document.querySelectorAll("#" + dropdownId + " .pictureSliderItem"));
    let dots = document.querySelectorAll("#" + dropdownId + " .pictureDot");
  
    function hideSlides() {
      slides.forEach(function(slide) {
        slide.style.display = "none";
      });
    }
  
    function showSlide() {
      hideSlides();
      slides[slideIndex].style.display = "block";
  
      // Remove "active" class from all dots
      dots.forEach(function(dot) {
        dot.classList.remove("active");
      });
  
      // Add "active" class to the corresponding dot
      dots[slideIndex].classList.add("active");
  
      // Increment slideIndex
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset slideIndex to 0 when it reaches the last slide
      }
  
      // Reset the timer to change slide every 4 seconds
      setTimeout(showSlide, 4000);
    }
  
    // Call the showSlide function to start the slideshow
    showSlide();
}
  
  
  