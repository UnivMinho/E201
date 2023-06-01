document.getElementById("registo").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var local = document.getElementById("local").value;
    var tipo = document.getElementById("tipo").value;
    var listap = document.getElementById("listap").value;
    var listam = document.getElementById("listam").value;

    var locaisExistentes = [
        'Sao Pedro',
        'Sao Joao',
        'Sao Luis'
    ];

    var tipoExistentes = [
        'padel',
        'futebol',
        'tenis'
    ];

    var listapExistentes = [
        'Joao Pereira',
        'Manuel Sousa',
        'Maria Pinto'
    ];

    if (nome === "" || local === "" || tipo === "" || listap === "" || listam === "") {
        window.alert("Preencha todos os campos");
        return;
    }

    if (!locaisExistentes.includes(local)) {
        window.alert("Localidade inválida");
    }

    if (!tipoExistentes.includes(tipo)) {
        window.alert("Tipo inválido");
    }

    if (!listapExistentes.includes(listap)) {
        window.alert("Profissional inválido");
    }


    else{

    

    // Criação de uma nova linha na tabela
    var table = document.getElementById("registros");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Preenchimento da nova linha com os dados do formulário
    cell1.innerHTML = nome;
    cell2.innerHTML = local;
    cell3.innerHTML = tipo;
    cell4.innerHTML = listap;
    cell5.innerHTML = listam;

    // Limpeza dos campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("local").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("listap").value = "";
    document.getElementById("listam").value = "";

    window.alert("Registo efetuado com sucesso");
    }
});