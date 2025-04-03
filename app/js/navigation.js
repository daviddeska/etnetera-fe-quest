const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
const header = document.getElementById('siteHeader');


hamburger.addEventListener('click', () => {

});


let lastScrollY = window.scrollY;

// Hamburger toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
});

// Close nav when clicking outside or pressing escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('open');
        nav.classList.remove('active');
    }
});

// Hide header on scroll down, show on scroll up
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 60) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});