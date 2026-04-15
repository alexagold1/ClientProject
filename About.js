// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `${entry.target.dataset.animation || 'fadeInUp'} 1.8s ease forwards`;
      // Stagger animation for multiple elements
      const delay = entry.target.dataset.delay || 0;
      if (delay > 0) {
        entry.target.style.animationDelay = `${delay}ms`;
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in classes
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
  
  fadeElements.forEach((element, index) => {
    // Set animation type from class
    if (element.classList.contains('fade-in-left')) {
      element.dataset.animation = 'slideInLeft';
    } else if (element.classList.contains('fade-in-right')) {
      element.dataset.animation = 'slideInRight';
    } else {
      element.dataset.animation = 'fadeInUp';
    }
    
    // Add stagger delay for grid items
    if (element.closest('.values-grid, .team-grid, .stats-grid')) {
      const itemIndex = Array.from(element.parentElement.children).indexOf(element);
      element.dataset.delay = itemIndex * 150;
    }
    
    observer.observe(element);
  });

  // Animate hero elements with longer delays
  const heroElements = document.querySelectorAll('.about-hero .fade-in');
  heroElements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.4}s`;
  });

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add mouse hover effect for cards
  const cards = document.querySelectorAll('.value-card, .team-card, .stat-box');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Counter animation for stats
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounter = (element, target, duration = 3000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = element.dataset.value;
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current) + (element.dataset.value.includes('+') ? '+' : '');
      }
    }, 16);
  };

  // Observe stats section for counter animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const numbers = entry.target.querySelectorAll('.stat-number');
        numbers.forEach(num => {
          const text = num.textContent.trim();
          num.dataset.value = text;
          const numOnly = parseInt(text.replace(/\D/g, ''));
          animateCounter(num, numOnly, 3000);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.about-hero');
  if (hero) {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
});
/* --- Animation Trigger Logic --- */
window.addEventListener('load', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
  
  animatedElements.forEach((el, index) => {
    // We add a tiny staggered delay so they don't all pop at once
    setTimeout(() => {
      el.classList.add('animate-now');
    }, index * 100); 
  });
});