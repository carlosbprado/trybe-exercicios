// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor (numeros){
    let apoio = 0;
    for(a in numeros){
        if(numeros[apoio] > numeros[a]){
            apoio = a
        }
    }
    console.log(apoio); // exercicio pede para retornar mas visualmente o console.log consigo ver no terminal o que esta acontecendo.
}
menorValor([2, 4, 6, 7, 10, 0, -3])