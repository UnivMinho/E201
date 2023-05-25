function RegistarLocais() {

    var morada = document.getElementById("morada").value;
    var zona = document.getElementById("zona").value;
   
    
    if (morada == "" || zona == "" ) {
        window.alert("Preencha todos os campos");

    }


 else{
    window.alert("Registado com sucesso!");
}
    
}