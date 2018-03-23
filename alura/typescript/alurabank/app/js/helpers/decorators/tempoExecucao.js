System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function tempoExecucao() {
        return function (target, key, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                const retorno = metodoOriginal.apply(this, args);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("tempoExecucao", tempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
