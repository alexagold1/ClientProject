const btn = document.querySelector('.btn.red');
if (btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Menu placeholder - in production this would go to your menu page.');
  });
}

const fly = document.getElementById('fly');
const landing = document.getElementById('landing-wrapper');
const splash = document.getElementById('splash-screen');
const pageShell = document.querySelector('.page-shell');

// Trigger function for fade-in elements
function triggerAnimations() {
    const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    targets.forEach(el => el.classList.add('animate-now'));
}

setTimeout(() => {
  fly.style.display = 'none';
  landing.style.display = 'flex';
  splash.classList.add('splash-fade');

  setTimeout(() => {
    splash.classList.add('hidden');
    pageShell.classList.remove('hidden');
    
    // Start the fade-in animations now that page is visible
    triggerAnimations();
    
  }, 900);
}, 1900);

// Safety fallback
setTimeout(() => {
  if (!splash.classList.contains('hidden')) {
    splash.classList.add('hidden');
    pageShell.classList.remove('hidden');
    triggerAnimations();
  }
}, 6000);
