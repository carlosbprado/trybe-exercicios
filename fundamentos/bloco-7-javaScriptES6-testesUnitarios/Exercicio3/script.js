const contador = document.getElementById('btn-count');
const mensangem =  document.getElementById('txt');

let clickCount = 0;
const conta =  () => mensangem.value = clickCount += 1;

contador.addEventListener('click', conta);
   

