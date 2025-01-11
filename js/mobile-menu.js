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


const mobileDropdown = document.querySelector(".mobile-dropdown > a");
const mobileSubmenu = document.querySelector(".mobile-submenu");

mobileDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  mobileSubmenu.classList.toggle("hidden");
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!mobileDropdown.contains(e.target) && !mobileSubmenu.contains(e.target)) {
    mobileSubmenu.classList.add("hidden");
  }
});

const btnUp = {
  el: document.querySelector('.btn'),
  show() {
    this.el.classList.remove('btn-hide');
  },
  hide() {
    this.el.classList.add('btn-hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();