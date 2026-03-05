// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Simple Greeting Console Log
console.log("Portz IT Tech Solutions LLC site loaded successfully.");

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(0,0,0,0.9)';
        header.style.boxShadow = 'none';
    }
});