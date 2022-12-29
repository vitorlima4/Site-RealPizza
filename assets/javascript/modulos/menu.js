//Menu hamburguer
export default function initMenu() {
  const navMenu = document.querySelector('[data-menu="menuHambuguer"]'),
    navClose = document.querySelector('[data-close="fechar"]'),
    navToggle = document.querySelector('[data-toggle="alternar"]'),
    navLink = document.querySelectorAll('a[href^="#"]');

  if (navMenu && navClose && navToggle && navLink) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });

    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });

    //Remove menu com click no link
    function removeMenu() {
      navMenu.classList.remove("show-menu");
    }

    navLink.forEach((item) => {
      item.addEventListener("click", removeMenu);
    });

    //Scroll suave
    function getScrollTopByHref(element) {
      const id = element.getAttribute("href");
      return document.querySelector(id).offsetTop;
    }

    function scrollToPosition(to) {
      window.scroll({
        top: to,
        behavior: "smooth",
      });
    }

    function scrollSuave(event) {
      event.preventDefault();
      const to = getScrollTopByHref(event.target) - 56;
      scrollToPosition(to);
    }

    navLink.forEach((item) => {
      item.addEventListener("click", scrollSuave);
    });
  }
}
