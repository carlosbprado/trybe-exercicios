// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

// function indiceMaior(numeros) {
//   let apoio = 0;
//   for (let a in numeros) {
//     console.log(numeros[a]);
//   }
// }
// indiceMaior([2, 3, 6, 7, 10, 1]);
// Aqui retornamos os itens do array

function indiceMaior(numeros) {
    let apoio = 0;
    for (let a in numeros) {
      if(numeros[apoio] < numeros[a]){
        apoio = a
      }
    }
    console.log(apoio);
  }
  indiceMaior([2, 3, 6, 7, 10, 1]);