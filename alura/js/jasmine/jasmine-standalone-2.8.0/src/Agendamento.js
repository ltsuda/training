function Agendamento() {
    var classe = {
        para: function(consulta) {
            var umDiaEmMs = 1000 * 60 * 60 * 24;
            var vinteDiasEmMs = umDiaEmMs * 20;
            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMs);
            while(novaData.getDay() == 0 || novaData.getDay() == 6) novaData = new Date(novaData.getTime() + umDiaEmMs);
            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;           
        }
    };
    return classe;
}