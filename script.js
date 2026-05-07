// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            el.classList.add('active');
        }
    });
};

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 50;
        if (isVisible) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
};

// Initial calls
window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkills();
});

window.addEventListener('load', () => {
    revealOnScroll();
    animateSkills();
});

// Smooth scroll for anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Log for confirmation
console.log("Portfolio scripts initialized.");
