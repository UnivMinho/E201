window.addEventListener('DOMContentLoaded', event => {

    

    //funcao para editar o perfil
    document.getElementById('editar2').addEventListener('click', function() {
           
            //mostrar o modal
            confirmModal.classList.add('show'); // Adiciona a classe 'show' para exibir o modal
            confirmModal.style.display = 'block'; // Define o estilo 'display' como 'block' para exibir o modal
            document.body.classList.add('modal-open'); // Adiciona a classe 'modal-open' para evitar o scroll da página de fundo
              
            //button para confirmar e fazer as alteracoes
            confirmBtn.addEventListener('click', function() {
               
                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('passwordedit').value;


                var resultado = "";
                
                for (var i = 0; i < password.length; i++) {
                    resultado += "*";
                  }

              //para obrigar a preencher 
                  
                if (nome == "" || email == "" || password == "") {
                    window.alert("Preencha todos os campos");
                                
                }
                else if(!/\S+@\S+\.\S+/.test(email))  {
                    window.alert("Email errado");
             }
             else{
                document.getElementById('nomeutilizador').textContent = nome
                document.getElementById('emailutilizador').textContent = email
                document.getElementById('passwordutilizador').textContent = resultado

                
                confirmModal.classList.remove('show'); // Remove a classe 'show' para ocultar o modal
                confirmModal.style.display = 'none'; // Define o estilo 'display' como 'none' para ocultar o modal
                document.body.classList.remove('modal-open'); // Remove a classe 'modal-open' para permitir o scroll da página de fundo
                
                window.alert("Registado com sucesso!");
            }
                

            
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
