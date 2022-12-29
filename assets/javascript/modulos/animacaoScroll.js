export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-animacao="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTop - windowMetade < 0;
        if (sectionVisivel) {
          section.classList.add("scroll-ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
