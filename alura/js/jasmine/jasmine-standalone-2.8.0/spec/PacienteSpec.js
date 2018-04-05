describe('Paciente', () => {
    it('deve calcular o imc', () => {
        var paciente = new Paciente("Paciente 1", 28, 72, 1.82);
        expect(paciente.imc()).toEqual(72 / (1.82 * 1.82));
    });
    it('deve calcular batimentos cardiacos', () => {
        var paciente = new Paciente("Paciente 1", 28, 72, 1.82);
        expect(paciente.batimentos()).toEqual(1177344000);
    });
});