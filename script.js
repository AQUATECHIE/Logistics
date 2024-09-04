window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNavbar');
    if (window.scrollY > document.querySelector('.carousel').offsetHeight) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
});

