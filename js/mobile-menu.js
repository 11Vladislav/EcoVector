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

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();