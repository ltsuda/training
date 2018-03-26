export function tempoExecucao(emSegundos: boolean = false) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            console.log('----------------------------');
            console.log(`parâmetros passados para o método ${key}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            console.log(`O retorno do método ${key} é ${JSON.stringify(retorno)}`);
            const t2 = performance.now();
            console.log(`O método ${key} demorou ${(t2 - t1)/divisor}${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}