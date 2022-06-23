// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = "";
let menorPalavra = "";

for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra < array[index]){
        maiorPalavra += index
    } 
}
console.log(soma);
