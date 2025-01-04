// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
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

// Scroll function for project arrows
function scrollProjects(direction) {
    const container = document.querySelector('.project-container');
    const scrollAmount = 300; // Adjust scroll amount as needed
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
