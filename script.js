// Original layered CSS rain effect, using native DOM APIs.
function makeItRain() {
  let increment = 0;
  let frontDrops = '';
  let backDrops = '';
  while (increment < 100) {
    const duration = (1.8 + Math.random()).toFixed(2);
    const spacing = Math.floor(Math.random() * 5) + 5;
    increment += spacing;
    if (increment > 100) break;
    const timing = `animation-delay: -${(Math.random() * Number(duration)).toFixed(2)}s; animation-duration: ${duration}s;`;
    const contents = `<div class="stem" style="${timing}"></div>`;
    frontDrops += `<div class="drop" style="left: ${increment}%; bottom: ${103 + Math.random() * 4}%; ${timing}">${contents}</div>`;
    if (Math.floor(increment / spacing) % 2 === 0) backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${103 + Math.random() * 4}%; ${timing}">${contents}</div>`;
  }
  document.querySelector('.rain.front-row').innerHTML = frontDrops;
  document.querySelector('.rain.back-row').innerHTML = backDrops;
}

const header = document.querySelector('header');
const menuButton = document.querySelector('.icons');
function setMenu(open) {
  header.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menuButton.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
document.querySelectorAll('.nav-item').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('menu-open')) {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(max-width: 700px)').addEventListener('change', () => setMenu(false));
makeItRain();



