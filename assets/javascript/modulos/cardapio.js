//Cardapio lista
export default function initCardapio() {
  const menuBtn = document.querySelectorAll('[data-cardapio="botao"]'),
    menuList = document.querySelectorAll('[data-cardapio="lista"]');

  function menuAtivo(index) {
    menuList[index].classList.toggle("ativo-menu");
  }

  menuBtn.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      menuAtivo(index);
    });
  });
}
