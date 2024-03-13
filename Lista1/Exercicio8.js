/*
Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. 
Considere apenas vogais minúsculas (a, e, i, o, u).
*/

const texto = 'Thiago Faro Ribeiro';
const vogais = ['a', 'e', 'i', 'o', 'u'];

function contarVogais(texto) {
    contador = 0;

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();

        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais(texto));