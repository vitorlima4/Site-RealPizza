//Horario de funcionamento
export default function initHorario(){

    const funcionamento = document.querySelector('[data-horario]');
    const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number);
    const entradaFuncionamento = document.querySelector('#informacao');

    const horarioAgora = new Date().getHours();

    if(horarioAgora >= horarioFuncionamento[0] && horarioAgora < horarioFuncionamento[1]){
        entradaFuncionamento.innerHTML = `(Aberto)`
    }else{
        entradaFuncionamento.innerHTML = `(Fechado)`
    }
}