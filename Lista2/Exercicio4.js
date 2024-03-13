/*
4. Dado o array numeros = [1, 2, 3, 4, 5,6,7,8,9,10], escreva uma função que receba um array e retorne um array de números ímpares.
*/

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosImpares(numeros) {
  const listaImpares = [];

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 !== 0) {
      listaImpares.push(numero);
    }
  }

  return listaImpares;
}
console.log(numerosImpares(numeros)); // Saída: [1, 3, 5, 7, 9]
