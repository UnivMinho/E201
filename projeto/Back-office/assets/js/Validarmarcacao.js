window.addEventListener('DOMContentLoaded', event => {

  //adiciona um botao quando o estado = a pendente
  const tabela = document.querySelector('.table');

  for (let i = 0; i < tabela.rows.length; i++) {
  const estado = tabela.rows[i].cells[5].textContent;
  if (estado === 'Pendente') {
      const botao = document.createElement('button');
      botao.classList.add('btn', 'btn-primary', 'botao1');
      botao.textContent = 'Cancelar';
      botao.style.backgroundColor = "red"
      tabela.rows[i].cells[6].appendChild(botao);

      const botao2 = document.createElement('button');
      botao2.classList.add('btn', 'btn-primary', 'botao2');
      botao2.textContent = 'Aceitar';
      botao2.style.backgroundColor = "var(--bs-green)"
      tabela.rows[i].cells[7].appendChild(botao2);
  }
  }

  const botoes2 = document.getElementsByClassName('botao2');
/*
    for (let i = 0; i < botoes2.length; i++) {
      botoes2[i].addEventListener('click', function(event) {
        
        const celulaClicada = event.target;
        
          tabela.rows[i].cells[4]..innerText = 'Aceite';
        
      });
    }
*/

  //remove a reserva quando se clica no botao
  const botoes = document.getElementsByClassName('botao1');


  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function(event) {
      const celulaClicada = event.target;
      celulaClicada.parentNode.parentNode.remove();
    });
  }

  
  


});

  