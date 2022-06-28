const tituloUrgente = document.querySelectorAll('.emergency-tasks h3' );
for( let i = 0; i < tituloUrgente.length; i += 1){
    tituloUrgente[i].style.backgroundColor = 'purple';
}

const fundo = document.querySelectorAll('.emergency-tasks div' );
for( let i = 0; i < fundo.length; i += 1){
    fundo[i].style.backgroundColor = 'salmon';
}

const tituloPrincipal = document.getElementById('header-container');
tituloPrincipal.style.backgroundColor = '#00B069'

const tituloNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for( let i = 0; i < tituloNaoUrgente.length; i += 1){
    tituloNaoUrgente[i].style.backgroundColor = 'black';
}

const fundoNaoUrgente = document.querySelectorAll('.no-emergency-tasks div');
for( let i = 0; i < fundoNaoUrgente.length; i += 1){
    fundoNaoUrgente[i].style.backgroundColor = '#F9DB5E';
}




