// Typed.js initialization
var typed = new Typed('#element', {
    strings: ['Artist.','Accountant.','Event Manager.' ,'Web Developer.', 'Financial Advisor.',],
    typeSpeed: 60,
});





// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.right');
const navLinks = document.querySelectorAll('.right ul li a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    // Toggle active class on hamburger
    hamburger.classList.toggle('active');
    
    // Toggle active class on nav menu
    navMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
});

// Close menu when a link is clicked (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        
        // Add active class to clicked link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight current page in navigation
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Close menu when clicking outside (optional)
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger') && !e.target.closest('.right')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

  const slideContainer = document.getElementById("slideContainer");
  const images = slideContainer.querySelectorAll("img");
  let currentIndex = 0;

  function updateSlide() {
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  });

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  });

 