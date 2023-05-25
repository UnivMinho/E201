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
    
            
            var mensagem = `Deseja reservar o campo para ${cabecalhoCorrespondente.textContent} às ${celulaClicada.textContent}?`;
            console.log(mensagem)
    
    
              
            confirmModalBody.textContent = mensagem;
            confirmModal.classList.add('show'); // Adiciona a classe 'show' para exibir o modal
            confirmModal.style.display = 'block'; // Define o estilo 'display' como 'block' para exibir o modal
            document.body.classList.add('modal-open'); // Adiciona a classe 'modal-open' para evitar o scroll da página de fundo
              
    
            confirmBtn.addEventListener('click', function() {
                celulaClicada.style.visibility = 'hidden';
                celulaClicada.style.position = 'absolute';
                celulaClicada.style.width = `${celulaClicada.offsetWidth}px`;
                console.log(`Hora ${cabecalhoCorrespondente.textContent} reservada com sucesso!`);
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
            
    
            cancelar.addEventListener('click', function() {
                
                console.log(`cancelado`);
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
    
            cancelar2.addEventListener('click', function() {
                
                console.log(`cancelado`);
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
            
            
    
    
            }
        });
        }

//funcao para ver se o login esta feito e deixa ir para a pagina 
   function getParameterByName(name) {

    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    
    results = regex.exec(location.search);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    
    }
    

    if (getParameterByName('login')=='true' && getParameterByName('data')=='Hello'){

        document.getElementById('imgicon').style 

    }
    
    


});
