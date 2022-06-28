// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let percentual = 90;

if (percentual >= 90 && percentual < 101){
    console.log('A');
}else if(percentual >= 80 && percentual < 90){
    console.log('B');
}else if(percentual >= 70 && percentual < 80){
    console.log('C');
}else if (percentual >= 60 && percentual < 70){
    console.log('D');
}else if (percentual >=50 && percentual < 60){
    console.log('E');
} else if (percentual >= 0 && percentual < 50){
    console.log('F');
}else{console.log('Erro');}