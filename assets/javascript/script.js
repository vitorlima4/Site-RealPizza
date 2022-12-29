import initMenu from "./modulos/menu.js";
import initAnimacaoScroll from "./modulos/animacaoScroll.js";
import initCardapio from "./modulos/cardapio.js";
import SlideNav from "./modulos/slide.js";
import initPerguntas from "./modulos/perguntas.js";
import initHorario from "./modulos/horario.js";
import initModal from "./modulos/modal.js";

initMenu();
initAnimacaoScroll();
initCardapio();
initPerguntas();
initHorario();
initModal();

const slide = new SlideNav("#slide-list", "#slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
