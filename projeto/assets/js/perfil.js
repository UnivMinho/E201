window.addEventListener('DOMContentLoaded', event => {

    

    
    document.getElementById('editar2').addEventListener('click', function() {
           
            //mostrar o modal
            confirmModal.classList.add('show'); // Adiciona a classe 'show' para exibir o modal
            confirmModal.style.display = 'block'; // Define o estilo 'display' como 'block' para exibir o modal
            document.body.classList.add('modal-open'); // Adiciona a classe 'modal-open' para evitar o scroll da página de fundo
              
            //button para confirmar
            confirmBtn.addEventListener('click', function() {
               
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
            
            //button para cancelar
            cancelar.addEventListener('click', function() {
                
                console.log(`cancelado`);
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
    
            //button para cancelar X
            cancelar2.addEventListener('click', function() {
                
                console.log(`cancelado`);
            
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
            });
            
            
    
    
            
        });
        

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
