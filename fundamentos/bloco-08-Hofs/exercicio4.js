const { books } = require("./arrayExercicios");

// 🚀 4- Encontre o livro com o maior nome.

function longestNamedBook() {
  return books.reduce((maiorLivro, livro) =>
    maiorLivro.name.length > livro.name.length ? maiorLivro : livro
  );
}
console.log(longestNamedBook());