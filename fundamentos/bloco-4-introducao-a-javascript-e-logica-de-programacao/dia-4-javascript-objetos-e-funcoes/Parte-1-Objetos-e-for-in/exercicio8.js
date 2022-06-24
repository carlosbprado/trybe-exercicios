// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
      {
        titulo: "O Pior Dia de Todos",
        autor: "Daniela Kopsch",
        editora: "Tordesilhas",
      },
    ],
  };
  
  leitor.livrosFavoritos.push({
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editora: "Rocco",
  });

        // PRIMEIRO TESTE
//   let soma = 0;
//   for(let quantidade =0; quantidade < leitor.livrosFavoritos.length; quantidade += 1){
//     soma = quantidade +1;
    
//   }
//   console.log(leitor.nome +' tem ' + soma + ' livros favoritos ');

// console.log(leitor.livrosFavoritos.length);

        // RESOLUCAO FINAL

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');