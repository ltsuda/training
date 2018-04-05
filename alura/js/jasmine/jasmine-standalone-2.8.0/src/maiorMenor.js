function maiorMenor() {
    var menor;
    var maior;
    var classe = {
        encontra: function(nums) {
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;

            nums.forEach(element => {
                if(element < menor) menor = element;
                if(element > maior) maior = element;
            });
        },
        pegaMenor: function() { return menor },
        pegaMaior: function() { return maior }
    };
    return classe;
}