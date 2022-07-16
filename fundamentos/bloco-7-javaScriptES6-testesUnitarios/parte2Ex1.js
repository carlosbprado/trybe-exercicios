// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (n) => {
    if ( n > 1){
        return n * fatorial (n - 1);
    }
    return n;
}

console.log(fatorial(4));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.


const fat = n => n > 1 ? n * fatorial (n -1 ) : 1;
console.log(fat(0));