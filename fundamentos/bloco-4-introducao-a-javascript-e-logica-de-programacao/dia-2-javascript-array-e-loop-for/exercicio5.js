//🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = numbers[0];

for(let a = 1; a < numbers.length; a += 1){
    if(numbers[a] > max){
        max = numbers[a];
    }
}
console.log(max);