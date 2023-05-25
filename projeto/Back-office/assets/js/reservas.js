window.addEventListener('DOMContentLoaded', event => {

    //adiciona um botao quando o estado = a pendente
    const tabela = document.querySelector('.table');

    for (let i = 0; i < tabela.rows.length; i++) {
    const estado = tabela.rows[i].cells[4].textContent;
    if (estado === 'Pendente') {
        const botao = document.createElement('button');
        botao.classList.add('btn', 'btn-primary');
        botao.textContent = 'Cancelar';
        tabela.rows[i].cells[5].appendChild(botao);
    }
    }

    //remove a reserva quando se clica no botao
    const botoes = document.querySelectorAll('table button');

    for (let i = 0; i < botoes.length; i++) {
      botoes[i].addEventListener('click', function(event) {
        const celulaClicada = event.target;
        celulaClicada.parentNode.parentNode.remove();
      });
    }

    
    


});
