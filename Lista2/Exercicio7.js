/*
7. Escreva uma função chamada encontraMaiorNumero que recebe um array de números como entrada 
e retorna o maior número encontrado no array.
*/

lista = [40,198,23,43,14,35,76,97,18,9,0]
function encontraMaiorNumero (numero){
    return Math.max(...numero);

}

console.log(encontraMaiorNumero(lista));