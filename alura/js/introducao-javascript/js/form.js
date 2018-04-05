botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = getPacienteForm(form);
    
    

    var erros = validatePaciente(paciente);

    if (erros.length > 0) {
        showMensagemErro(erros);
        console.log(erros);
        return
    }

    addPaciente(paciente);
    
    form.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

});

function addPaciente(paciente) {
    var pacienteTr = setPacienteTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function showMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function getPacienteForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function setPacienteTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(setPacienteTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(setPacienteTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(setPacienteTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(setPacienteTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(setPacienteTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function setPacienteTd(data, classe) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
}

function validatePaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0) {
        erros.push("Os campos não podem estar vazios");
    }
    if (!validatePeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if (!validateAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    return erros;
}

