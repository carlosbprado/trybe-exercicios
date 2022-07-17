// Crie uma função que receba uma frase e retorne a maior palavra.
// longestWord('Antônio foi no  banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const maiorPalavra = (frase) => {
    const arrayPalavra = frase.split(' ')
    let maiorPalavra = 0;
    let palavra = '';

    for (word of arrayPalavra){
        if (word.length > maiorPalavra){
            maiorPalavra = word.length;
            palavra = word;
            console.log(word);
        }


    }
    return palavra;
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));