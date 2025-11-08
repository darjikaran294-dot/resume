// Simple scroll animation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add("visible");
        }
    });
});

// Fade-in animation
document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = "opacity 1s ease";
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.style.opacity = 1;
        }
    });
});