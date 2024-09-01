window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var backgroundDiv = document.querySelector('.background-div');
    
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('active');
        backgroundDiv.classList.add('active');
    } else {
        navbar.classList.remove('active');
        backgroundDiv.classList.remove('active');
    }
});

// JavaScript to handle the menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
