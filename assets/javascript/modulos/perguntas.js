//Perguntas frequentes
export default function initPerguntas() {
    const faqList = document.querySelectorAll('[data-faq-lista="lista"] dt');

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