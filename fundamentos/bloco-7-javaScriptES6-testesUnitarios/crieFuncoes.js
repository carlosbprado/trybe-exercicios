const substituicao = (nome) => {
    const frase = 'Tryber x aqui!';
    const novaFrase = frase.replace('x', nome)
    return novaFrase;
}

const minhasSkills = (funcao) => {
    const skills = ['HTML', 'CSS', 'JavaScript']
    let resultado = `${funcao}  Minhas três principais habilidades são:`
    skills.forEach((skill)=> {
        resultado = `${resultado} - ${skill}`
    });
    return resultado;
}

console.log(minhasSkills(substituicao('Pedro')));