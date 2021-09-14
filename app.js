const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});

function hover(element) {
    element.setAttribute('src', 'realProfilePhoto.svg');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'profilePhoto.svg');
  }


