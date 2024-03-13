/*
Escreva uma função que verifique se uma determinada string é um palíndromo 
(ou seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda).
Exemplo: arara
*/
function palindromo(texto) {
    if (texto === texto.split('').reverse().join('')) {
        return `A palavra "${texto}" é um palíndromo.`
    } else {
        return `A palavra "${texto}" não é um palíndromo.`
    }
}

console.log(palindromo('arare'));
console.log(palindromo('arara'));

