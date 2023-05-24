var login = false;

var btn_profile = document.getElementById('btn-profile') 
btn_profile.style.visibility = 'hidden';

var btn_login = document.getElementById('btn-login') 


window.addEventListener('DOMContentLoaded', event => {

    function getParameterByName(name) {

        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        
        results = regex.exec(location.search);
        
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        
        }

    if (getParameterByName('login')=='true') {
        btn_profile.style.visibility = 'visible'
        btn_login.style.visibility = 'block'
    }else {
        btn_profile.style.visibility = 'block'
        btn_login.style.visibility = 'visible'
    }

})


//funcao para permitir ir para a pagina de futebole se tiver o login feito

document.getElementById('navigate').addEventListener('click', function(event) {

    event.preventDefault();


    


    var url = "";


      function getParameterByName(name) {

        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        
        results = regex.exec(location.search);
        
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        
        }
        
        
        
        if (getParameterByName('login')=='true'){
            url = "futebol.html" + "?login=true";
            
        }else {
            url = "loginPage.html"
        }
        

    window.location.href = url;


    
    });



    //funcao para permitir ir para a pagina de padel se tiver o login feito

    document.getElementById('navigateP').addEventListener('click', function(event) {

        event.preventDefault();
    
    
        
    
    
        var url = "";
    
    
          function getParameterByName(name) {
    
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            
            results = regex.exec(location.search);
            
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            
            }
            
            
            
            if (getParameterByName('login')=='true'){
                url = "padel.html" + "?login=true";
                
            }else {
                url = "loginPage.html"
            }
            
    
        window.location.href = url;
    
    
        
        });




        
    //funcao para permitir ir para a pagina de tenis se tiver o login feito

    document.getElementById('navigateT').addEventListener('click', function(event) {

        event.preventDefault();
    
    
        
    
    
        var url = "";
    
    
          function getParameterByName(name) {
    
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            
            results = regex.exec(location.search);
            
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            
            }
            
            
            
            if (getParameterByName('login')=='true'){
                url = "padel.html" + "?login=true";
                
            }else {
                url = "loginPage.html"
            }
            
    
        window.location.href = url;
    
    
        
        });


