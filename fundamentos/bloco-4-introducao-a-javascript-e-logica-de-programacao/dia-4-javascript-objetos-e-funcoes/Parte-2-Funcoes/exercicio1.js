// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verificaPalindrome(palavra){
    for(a in palavra){
        if(palavra[a] != palavra[(palavra.length - 1) - a]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));