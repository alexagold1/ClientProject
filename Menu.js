const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-nav.prev');
const nextButton = document.querySelector('.carousel-nav.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

const updateActiveSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });

  slides[currentIndex].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest',
  });
};

prevButton?.addEventListener('click', () => updateActiveSlide(currentIndex - 1));
nextButton?.addEventListener('click', () => updateActiveSlide(currentIndex + 1));

const modal = document.getElementById('slideModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('slideModalBackdrop');

const openModal = (slide) => {
  if (!modal || !modalImage) return;

  modalImage.src = slide.querySelector('img')?.src || '';
  modalImage.alt = slide.querySelector('img')?.alt || 'Enlarged menu image';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    updateActiveSlide(index);
    openModal(slide);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateActiveSlide(index));
});

modalClose?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    updateActiveSlide(currentIndex + 1);
  }
  if (event.key === 'ArrowLeft') {
    updateActiveSlide(currentIndex - 1);
  }
  if (event.key === 'Escape') {
    closeModal();
  }
});

window.addEventListener('load', () => updateActiveSlide(currentIndex));

document.addEventListener('DOMContentLoaded', () => {

  // ======================
  // CAROUSEL
  // ======================

  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  const updateActiveSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    slides[currentIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  prevButton?.addEventListener('click', () => updateActiveSlide(currentIndex - 1));
  nextButton?.addEventListener('click', () => updateActiveSlide(currentIndex + 1));

  // ======================
  // MODAL
  // ======================

  const modal = document.getElementById('slideModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('slideModalBackdrop');

  const openModal = (slide) => {
    if (!modal || !modalImage) return;

    modalImage.src = slide.querySelector('img')?.src || '';
    modalImage.alt = slide.querySelector('img')?.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    if (!modal) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      updateActiveSlide(index);
      openModal(slide);
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateActiveSlide(index));
  });

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') updateActiveSlide(currentIndex + 1);
    if (event.key === 'ArrowLeft') updateActiveSlide(currentIndex - 1);
    if (event.key === 'Escape') closeModal();
  });

  updateActiveSlide(currentIndex);

  // ======================
  // ✨ FADE-IN ANIMATIONS
  // ======================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.style.animation =
          `${entry.target.dataset.animation || 'fadeInUp'} 1.2s ease forwards`;

        const delay = entry.target.dataset.delay || 0;
        if (delay > 0) {
          entry.target.style.animationDelay = `${delay}ms`;
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );

  fadeElements.forEach((element, index) => {

    if (element.classList.contains('fade-in-left')) {
      element.dataset.animation = 'slideInLeft';
    } else if (element.classList.contains('fade-in-right')) {
      element.dataset.animation = 'slideInRight';
    } else {
      element.dataset.animation = 'fadeInUp';
    }

    // optional stagger
    element.dataset.delay = index * 120;

    observer.observe(element);
  });

  
}); 