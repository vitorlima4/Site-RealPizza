//Menu hamburguer
function initMenu() {
  const navMenu = document.querySelector('.js-menu'),
    navClose = document.querySelector('.js-close'),
    navToggle = document.querySelector('.js-toggle'),
    navLink = document.querySelectorAll('a[href^="#"]');

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })

  //Remove menu com click no link
    function removeMenu() {
    navMenu.classList.remove('show-menu')
  }

  navLink.forEach(item => {
    item.addEventListener('click', removeMenu)
  })

  //Scroll suave
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: "smooth",
    })
  }
  
  function scrollSuave(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 56;
    scrollToPosition(to);
  }

  navLink.forEach(item => {
    item.addEventListener('click', scrollSuave);
  })
}
initMenu();

//Cardapio lista
function initCardapio() {
  const menuBtn = document.querySelectorAll('.js-menuBtn'),
    menuList = document.querySelectorAll('.js-menuList');

  function menuAtivo(index) {
    menuList[index].classList.toggle('ativo-menu');
  }

  menuBtn.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      menuAtivo(index);
    });
  });
}
initCardapio();

//Perguntas frequentes
function initPerguntas() {
  const faqList = document.querySelectorAll('.js-faqList dt');

  faqList[0].classList.toggle('ativa-lista'),
    faqList[0].nextElementSibling.classList.toggle('ativa-lista');

  function listaAtiva() {
    this.classList.toggle('ativa-lista'),
      this.nextElementSibling.classList.toggle('ativa-lista');
  }

  faqList.forEach((item) => {
    item.addEventListener('click', listaAtiva)
  })
}
initPerguntas();