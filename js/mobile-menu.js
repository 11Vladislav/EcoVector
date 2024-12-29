(() => {
  const refs = {
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  const openMenuBtns = document.querySelectorAll("[data-mobile-menu-open]");
    openMenuBtns.forEach(openMenuBtn =>
        openMenuBtn.addEventListener("click", toggleMenu));
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();