/* 
Faça uma função que mostre o dobro de um número. Caso o número seja menor ou igual a zero deve 
mostrar a mensagem "Só é aceito números positivos maiores que zero".
*/

function dobro_numero(numero) {

  if (numero <= 0) {

    return 'Só é aceito números positivos maiores que zero.';

  } else {

    return numero * 2;
  }
}

console.log(dobro_numero(5));
console.log(dobro_numero(0));
