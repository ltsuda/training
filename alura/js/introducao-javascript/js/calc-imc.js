var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

var botaoAdicionar = document.querySelector("#adicionar-paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validatePeso(peso);
    var alturaValida = validateAltura(altura);

    if (!pesoValido) {
        tdIMC.textContent = "Peso Inválido";
        pesoValido = false
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida) {
        tdIMC.textContent = "Altura Inválido";
        alturaValida = false
        paciente.classList.add("paciente-invalido");
    }
    if (alturaValida && pesoValido) {
        var imc = calcIMC(peso, altura);
        tdIMC.textContent = imc;
    }
}

function calcIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validatePeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validateAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}