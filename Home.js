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
  splash.classList.add('splash-fade');

  setTimeout(() => {
    splash.classList.add('hidden');
    pageShell.classList.remove('hidden');
  }, 900);
}, 1900);

setTimeout(() => {
  if (!splash.classList.contains('hidden')) {
    splash.classList.add('hidden');
    pageShell.classList.remove('hidden');
  }
}, 6000);
