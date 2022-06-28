// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaDeXadres = "bispO";
let peca = pecaDeXadres.toLowerCase();

switch (peca) {
  case "peao":
    console.log(peca + " 1 casa para frente");
    break;

  case "rei":
    console.log(peca + "  1 casa em qualquer direcao");
    break;

  case "rainha":
    console.log(peca + " anda quantas casas quizer em qualquer direcao");
    break;

  case "bispo":
    console.log(peca + " anda na diagonal quantas casas quiser");
    break;

  case "cavalo":
    console.log(peca + " anda em L");
    break;

  case "torre":
    console.log(peca + " anda em linha quantas casas quiser");
    break;

  default:
    console.log("peca nao encontrada");
}
