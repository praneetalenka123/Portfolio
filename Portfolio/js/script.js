// Typing effect
const texts = ["Software Engineer", "AI enthusiast", "IOT Interested"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if(count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.getElementById('typed-text').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Start typing effect when page loads
window.onload = function() {
    type();
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide navigation on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
    lastScroll = currentScroll;
});