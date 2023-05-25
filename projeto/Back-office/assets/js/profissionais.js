function RegistarProfissionais() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone  = document.getElementById("phone").value;
    
    if (name == "" || email == "" || phone == "") {
        window.alert("Preencha todos os campos");

    }



    if(!/\S+@\S+\.\S+/.test(email))  {
        window.alert("Email errado");

    }

    if(!/^[9][1236]\d{7}$/.test(phone))  { 
        window.alert("Numero errado");

    }

   

 else{
    window.alert("Registado com sucesso!");
}
    
}