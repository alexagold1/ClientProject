document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger the animation defined in CSS
        entry.target.style.opacity = "1";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to animated elements
  const animElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  animElements.forEach(el => observer.observe(el));
});