document.getElementById("registo2").addEventListener("submit", function(event) {
    event.preventDefault();

    var atividade = document.getElementById("atividade").value;
  {

    
   
    if (atividade == "" ) {
        window.alert("Preencha todos os campos");

    }


 else{
    window.alert("Registado com sucesso!");
}
  }
   
    
   
    
  
    // Criação de uma nova linha na tabela
    var table = document.getElementById("registros2");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    
    
  
    // Preenchimento da nova linha com os dados do formulário
    cell1.innerHTML = atividade;
    
  
  
    // Limpeza dos campos do formulário
    document.getElementById("atividade").value = "";
   
   
  });






















