function PacienteBuilder() {
    var nome = "Paciente";
    var idade = 28;
    var peso = 72;
    var altura = 1.80;

    var classe = {
        constroi: function() {
            return Paciente(nome, idade, peso, altura);
        },
        comNome: function(valor) {
            nome = valor;
            return this;
        },
        comIdade: function(valor) {
            idade = valor;
            return this;
        },
        comPeso: function(valor) {
            peso = valor;
            return this;
        },
        comAltura: function(valor) {
            altura = valor;
            return this;
        }
    }
    
    return classe;
}