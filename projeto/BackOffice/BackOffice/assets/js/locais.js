
   

document.getElementById("registo").addEventListener("submit", function(event) {
    event.preventDefault();

    var morada = document.getElementById("morada").value;
    var zona = document.getElementById("zona").value;
  {

    
   
    if (morada == "" || zona == "" ) {
        window.alert("Preencha todos os campos");
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
    
  
    // Preenchimento da nova linha com os dados do formulário
    cell1.innerHTML = morada;
    cell2.innerHTML = zona;
  
  
    // Limpeza dos campos do formulário
    document.getElementById("morada").value = "";
    document.getElementById("zona").value = "";
   
  });
