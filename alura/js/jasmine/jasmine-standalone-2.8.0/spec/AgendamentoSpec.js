describe('Agendamentos', () => {

    var paciente;
    var agenda;

    beforeEach(() => {
        paciente = new PacienteBuilder().constroi();
        agenda = new Agendamento();        
    });

    it('deve agendar para 20 dias depois', () => {
        var consulta = new Consulta(paciente, [], false, false, new Date(2014, 7, 1));
        var novaConsulta = agenda.para(consulta);
        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
    });

    it('deve pular fins de semana', () => {
        var consulta = new Consulta(paciente, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);
        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 6, 21).toString());
    });
});