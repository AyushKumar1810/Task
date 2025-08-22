// ColorCrest Paints - Extracted JavaScript from Demo.html

// for Smooth scrolling for anchor links
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

// Explore Colors button functionality
function exploreColors() {
    document.querySelector('.section-padding').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Learn More button functionality
function learnMore(category) {
    const messages = {
        interior: 'Interior Paints: Perfect for bedrooms, living rooms, kitchens, and bathrooms. Available in various finishes and colors.',
        exterior: 'Exterior Paints: Designed to withstand weather conditions while maintaining vibrant colors for years.',
        wood: 'Wood Coatings: Specialized formulations that enhance wood grain while providing superior protection.',
        metal: 'Metal Paints: Anti-rust and anti-corrosive properties make them ideal for metal surfaces and industrial use.'
    };
    
    alert(messages[category] || 'Learn more about our premium paint products!');
}

// Added loading animation to page
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.product-card, .benefit-card, .contact-form');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add dynamic color change to floating elements
const floatingCircles = document.querySelectorAll('.floating-circle');
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];

setInterval(() => {
    floatingCircles.forEach(circle => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        circle.style.background = randomColor;
    });
}, 3000);
