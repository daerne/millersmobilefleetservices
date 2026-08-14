const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.primary-nav');
const header = document.querySelector('[data-header]');

function closeNavigation() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
  document.body.classList.remove('nav-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNavigation(); });
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
document.querySelector('[data-year]').textContent = new Date().getFullYear();

document.querySelector('[data-service-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = 'Form delivery is not configured yet. Please add the business contact details and a form endpoint before launch.';
  status.focus?.();
});
