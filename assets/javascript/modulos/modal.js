export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrirModal"]');
  const fechar = document.querySelector('[data-modal="fecharModal"]');
  const containerModal = document.querySelector(
    '[data-modal="containerModal"]'
  );

  if (abrir && fechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo-modal");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    abrir.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
