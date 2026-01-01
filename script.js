
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
alert('✓ Mensaje enviado con éxito! Te contactaré pronto.');
this.reset();
});

window.addEventListener('scroll', function() {
const header = document.querySelector('header');
if (window.scrollY > 50) {
    header.style.background = 'rgba(0, 0, 0, 0.98)';
} else {
    header.style.background = 'rgba(0, 0, 0, 0.95)';
}
});
