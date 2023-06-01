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
        btn_login.style.display = 'none'
    }

})




