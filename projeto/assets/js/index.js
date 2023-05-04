var login = false;

var btn_profile = document.getElementById('btn-profile') 
btn_profile.style.visibility = 'hidden';


window.addEventListener('DOMContentLoaded', event => {
    if (login) {
        btn_profile.style.visibility = 'block'
    }


})

var login = function login() {
    return true;
}

document.getElementById('navigate').addEventListener('click', function(event) {

    event.preventDefault();
    
    var data = "Hello, World!";

    var url = "";

    if (login) {
        url = "futebol.html" + "?data=" + encodeURIComponent(data) + "&login=" + login();
    } else {
        url = "login.html"
    }
    
    window.location.href = url;
    
    });

