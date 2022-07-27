const { books } = require('./arrayExercicios');

function averageAge() {
    const livros = books.length
    const idades = books.reduce((total, book) => total + (book.releaseYear - book.author.birthYear), 0)
    return idades / livros
  }
 console.log(averageAge());