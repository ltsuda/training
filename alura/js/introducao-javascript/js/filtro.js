var inputFiltro = document.querySelector("#filtro-tabela");

inputFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        pacientes.forEach(function(paciente) {
            var nome = paciente.querySelector(".info-nome").textContent;
            var regex = new RegExp(inputFiltro.value, "i");
            if (!regex.test(nome)) {
                paciente.classList.add("hidePaciente");
            } else {
                paciente.classList.remove("hidePaciente");
            }
        });
    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("hidePaciente");
        });
    }
});