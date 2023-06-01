window.addEventListener('DOMContentLoaded', event => {
  const tabela = document.querySelector('.table');

  for (let i = 1; i <= tabela.rows.length; i++) {
    const botaoconf = document.createElement('button');
    const botaocanc = document.createElement('button');

    botaoconf.classList.add('btn', 'btn-primary');
    botaoconf.textContent = 'Confirmar';
    botaoconf.style.backgroundColor = "var(--bs-green)";
    tabela.rows[i].cells[6].appendChild(botaoconf);

    botaocanc.classList.add('btn', 'btn-primary');
    botaocanc.textContent = 'Cancelar';
    botaocanc.style.backgroundColor = "var(--bs-green)";
    tabela.rows[i].cells[7].appendChild(botaocanc);

    botaocanc.addEventListener('click', function (event) {
      const celulaClicada = event.target;
      celulaClicada.parentNode.parentNode.remove();
    });

    botaoconf.addEventListener('click', function (event) {
      const conf = event.target;
      const row = conf.parentNode.parentNode;
      const estadoCell = row.cells[5];

      if (estadoCell.textContent !== 'Confirmado') {
        estadoCell.textContent = 'Confirmado';
        botaocanc.remove();
        botaoconf.remove();
      }
    });
  }
});




