/* 
Faça um programa que recebe o nome de uma variável e mostre o
<<primeiro>>.<<último nome>>@facens.br
*/


const texto = 'Thiago Faro Ribeiro';
const email = Email(nome);

function Email(nome) {
  partesNome = nome.toLowerCase().split(' ');
  return `${partesNome.shift()}.${partesNome.pop()}@facens.br`;
}

console.log(email);











