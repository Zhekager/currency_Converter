const ref = {
  burgerMenu: document.querySelector('.nav-menu_icon'),
  modalMenu: document.querySelector('.modal-menu'),
  closeMenu: document.querySelector('.modal_btn-close'),
};

ref.burgerMenu.addEventListener('click', openMenu);
ref.closeMenu.addEventListener('click', closeMenu);
window.addEventListener('keydown', keyCloseMenu);

function openMenu() {
  ref.modalMenu.classList.toggle('is-hidden');
}

function closeMenu(evt) {
  const contains = ref.modalMenu.classList.contains('is-hidden');

  {
    !contains && ref.modalMenu.classList.add('is-hidden');
  }
}

function keyCloseMenu(evt) {
  if (evt.code === 'Escape') {
    ref.modalMenu.classList.add('is-hidden');
  }
}
