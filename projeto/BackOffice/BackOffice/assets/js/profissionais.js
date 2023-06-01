document.getElementById("registo").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone  = document.getElementById("phone").value;
  {

    
   
    if (name == "" || email == "" || phone == "") {
        window.alert("Preencha todos os campos");
        return;

    }



    if(!/\S+@\S+\.\S+/.test(email))  {
        window.alert("Email errado");
        return;

    }

    if(!/^[9][1236]\d{7}$/.test(phone))  { 
        window.alert("Numero errado");
        return;

    }

   

 else{
    window.alert("Registado com sucesso!");
}
  }
   
    
   
    
  
    // Criação de uma nova linha na tabela
    var table = document.getElementById("registros");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
  
    // Preenchimento da nova linha com os dados do formulário
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
  
  
    // Limpeza dos campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
   
  });






