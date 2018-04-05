describe('Consulta', () => {

    var paciente;

    beforeEach(function () {
        paciente1 = new PacienteBuilder().constroi();
    });

    describe('consultas do tipo retorno', () => {
        it('nao deve cobrar nada se retorno', () => {
            var consulta = new Consulta(paciente, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe('consultas com procedimentos', () => {
        it('deve cobrar 25 por cada procedimento comum', () => {
            var consulta = new Consulta(paciente, ["proc1", "proc2", "proc3"], false, false);
            expect(consulta.preco()).toEqual(75);
        });
        it('deve cobrar preco especifico dependendo do procedimento', () => {
            var consulta = new Consulta(paciente, ["proc1", "raio-x", "gesso", "proc2"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

    describe('consultas particulares', () => {
        it('deve dobrar o preco da consulta particular', () => {
            var consulta = new Consulta(paciente, ["proc1", "proc2"], true, false);
            expect(consulta.preco()).toEqual(50 * 2);
        });
        it('deve dobrar o preco da consulta particular mesmo com procedimentos especiais', () => {
            var consulta = new Consulta(paciente, ["raio-x", "gesso"], true, false);
            expect(consulta.preco()).toEqual((55 + 32) * 2);
        });
    });

});