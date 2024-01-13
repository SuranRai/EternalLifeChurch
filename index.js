// get search bar element

const searchInput = document.getElementById("searchInput");


// store name elements in array-like object

const namesFromDOM = document.getElementsByClassName("name");

// listen for user events

searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // get user search input converted to lowercase

  const searchQuery = value.toLowerCase();

  for (const nameElement of namesFromDOM) {
    // store name text and convert to lowercase

    let name = nameElement.textContent.toLowerCase();

    // compare current name to search input

    if (name.includes(searchQuery)) {
      // found name matching search, display it

      nameElement.style.display = "block";
    } else {
      // no match, don't display name

      nameElement.style.display = "none";
    }
  }
});

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
 }
 function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }