// Handle navbar appearance and hero title animation based on scroll position
const navbar = document.getElementById('navbar');
const heroTitle = document.querySelector('.hero-title');

function handleScroll() {
    const heroHeight = document.getElementById('hero').offsetHeight;
    // Once we scroll past the hero section, show the navbar and hide the hero title
    if (window.scrollY > heroHeight - 50) {
        navbar.classList.add('visible');
        heroTitle.classList.add('move-to-nav');
    } else {
        navbar.classList.remove('visible');
        heroTitle.classList.remove('move-to-nav');
    }
}

window.addEventListener('scroll', handleScroll);
