const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');

function setMenu(open) {
  navigation.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

toggle.hidden = false;
document.querySelector('.header').classList.add('nav-ready');

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') === 'false');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
