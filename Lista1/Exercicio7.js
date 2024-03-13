/*
Escreva uma função que receba uma string como argumento e retorne a string invertida.
*/

const linguagem = 'JavaScript';

function inverterCaracteres(texto) {
    return texto.split('').reverse().join('');
}

console.log(inverterCaracteres(linguagem));