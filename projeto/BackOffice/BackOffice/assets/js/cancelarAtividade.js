var linhas = document.getElementsByTagName("tr");
for (var i = 0; i < linhas.length; i++) {
  linhas[i].onclick = function() {
    var linha = this;

    // Verificar se a linha já possui um botão
    if (!linha.querySelector("button")) {
      var botao = document.createElement("button");
      botao.innerHTML = "Cancelar";
      botao.className="btn btn-success";
    botao.style.color='black';
      botao.onclick = function() {
        // Remover a linha atual
        linha.parentNode.removeChild(linha);
      };
      linha.appendChild(botao);
    }
  };
}