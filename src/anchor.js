const menu = document.querySelector('[data-menu]');
const MenuBtn = document.querySelector('[data-menu-btn]');

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
  if (event.target) {
    document.body.classList.toggle('scroll-lock');
    menu.classList.toggle('is-close');
    MenuBtn.classList.toggle('is-active');
  }
}
