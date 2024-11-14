// JavaScript for additional interactions
document.addEventListener('DOMContentLoaded', function () {
    // Hero section animation
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseover', function () {
        heroSection.style.transform = 'scale(1.05)';
        heroSection.style.transition = 'transform 0.5s ease-in-out';
    });
    heroSection.addEventListener('mouseout', function () {
        heroSection.style.transform = 'scale(1)';
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }

    // Add rocket animation to hero section
    const rocket = document.createElement('div');
    rocket.classList.add('rocket');
    document.body.appendChild(rocket);

    // Add animated circles to background
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        document.body.appendChild(circle);
    }
});
