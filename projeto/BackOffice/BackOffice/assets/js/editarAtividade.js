document.addEventListener("DOMContentLoaded", function() {
    const tableRows = document.querySelectorAll(".table tr:not(:first-child)");

    tableRows.forEach(function(row) {
        row.addEventListener("click", function() {
            if (row.classList.contains("editing")) {
                // Já está em modo de edição, ignorar o clique
                return;
            }

            // Adicionar classe de seleção apenas à linha clicada
            tableRows.forEach(function(row) {
                row.classList.remove("selected");
            });
            row.classList.add("selected");

            const cells = row.querySelectorAll("td");
            cells.forEach(function(cell) {
                const cellValue = cell.textContent;
                const input = document.createElement("input");
                input.type = "text";
                input.value = cellValue;
                cell.textContent = "";
                cell.appendChild(input);
            });

            row.classList.add("editing");
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".table tr")) {
            // Clique fora da tabela, encerrar o modo de edição
            const editingRow = document.querySelector(".table tr.editing");
            if (editingRow) {
                const inputs = editingRow.querySelectorAll("input");
                inputs.forEach(function(input) {
                    const cell = input.parentNode;
                    const cellValue = input.value;
                    cell.removeChild(input);
                    cell.textContent = cellValue;
                });
                editingRow.classList.remove("editing");
            }
        }
    });
});
