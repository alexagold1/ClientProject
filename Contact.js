/* --- Animation Trigger Logic --- */
window.addEventListener('load', () => {
  // Ensure we start at the top on refresh
  window.scrollTo(0, 0);

  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
  
  animatedElements.forEach((el, index) => {
    // Staggered delay: 0ms for H1, 100ms for subtitle, 200ms for form, etc.
    setTimeout(() => {
      el.classList.add('animate-now');
    }, index * 100); 
  });
});

// Optional: Basic Form handling to prevent refresh on demo
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
}