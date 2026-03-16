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

setTimeout(() => {
  fly.style.display = 'none';
  landing.style.display = 'flex';
  splash.classList.add('fade-out');

  setTimeout(() => {
    pageShell.classList.remove('hidden');
  }, 450);
}, 2500);

setTimeout(() => {
  if (splash && !splash.classList.contains('fade-out')) {
    splash.classList.add('fade-out');
    pageShell.classList.remove('hidden');
  }
}, 5800);
