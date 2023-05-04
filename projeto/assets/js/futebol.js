window.addEventListener('DOMContentLoaded', event => {

    //funcao para confirmar reserva
    const celulas = document.querySelectorAll('td, th');

    for (let i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener('click', function(event) {
        if (event.target.nodeName === 'TD' || event.target.nodeName === 'TH') {
        const celulaClicada = event.target;
        const indiceCelula = [...celulaClicada.parentNode.children].indexOf(celulaClicada);
        const cabecalhoCorrespondente = document.querySelector(`th:nth-child(${indiceCelula + 1})`);
        console.log(`Clicou em ${celulaClicada.textContent} na coluna "${cabecalhoCorrespondente.textContent}"`);
 
        // Exibe um popup de confirmação
        const confirmarReserva = window.confirm(`Você deseja reservar o campo para ${celulaClicada.textContent} às ${cabecalhoCorrespondente.textContent}?`);
 
        if (confirmarReserva) {
            // Código para reservar a hora selecionada
            celulaClicada.style.visibility = 'hidden';
            celulaClicada.style.position = 'absolute';
            celulaClicada.style.width = `${celulaClicada.offsetWidth}px`;
            console.log(`Hora ${cabecalhoCorrespondente.textContent} reservada com sucesso!`);
        } else {
            // Código para cancelar a reserva
            console.log(`Reserva cancelada.`);
        }
        }
    });
    }

//funcao para ver se o login esta feito
   function getParameterByName(name) {

    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    
    results = regex.exec(location.search);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    
    }
    
    
    document.getElementById('output').textContent = getParameterByName('login');



    
    


});
