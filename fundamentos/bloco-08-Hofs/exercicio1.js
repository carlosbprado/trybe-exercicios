// Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
   return arrays.reduce((acc, curr) => acc.concat(curr), [])
 }
console.log( flatten());

// concat cria um novo array unindo todos os elementos que foram passados ​​como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado para um array).
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat