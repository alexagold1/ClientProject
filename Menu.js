// 1. Force page to the top and prevent browser "sticky" scroll
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  // ======================
  // CAROUSEL LOGIC
  // ======================
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  const updateActiveSlide = (index, isInitialLoad = false) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // CRITICAL: Only scroll if it's NOT the first load
    if (!isInitialLoad) {
      slides[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  // Event Listeners for Carousel
  prevButton?.addEventListener('click', () => updateActiveSlide(currentIndex - 1));
  nextButton?.addEventListener('click', () => updateActiveSlide(currentIndex + 1));
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateActiveSlide(index));
  });

  // ======================
  // MODAL LOGIC
  // ======================
  const modal = document.getElementById('slideModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('slideModalBackdrop');

  const openModal = (slide) => {
    if (!modal || !modalImage) return;
    modalImage.src = slide.querySelector('img')?.src || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  };

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      updateActiveSlide(index);
      openModal(slide);
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') updateActiveSlide(currentIndex + 1);
    if (e.key === 'ArrowLeft') updateActiveSlide(currentIndex - 1);
    if (e.key === 'Escape') closeModal();
  });

  // ======================
  // ANIMATION & INITIAL LOAD
  // ======================
  window.addEventListener('load', () => {
    // 1. Initialize carousel WITHOUT scrolling
    updateActiveSlide(0, true);

    // 2. Trigger Fade-in animations
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-now');
      }, index * 100);
    });
  });
});