/* 
Faça um programa que mostre a quantidade de caracteres para o texto "Disciplina de
Programação para web"
*/

const texto = 'Disciplina de Programação para web';
const textoSemEspaço = texto.replace(/\s/g, '');

console.log(`Contagem com os espaços: ${texto.length}`);
console.log(`Contagem sem os espaços: ${textoSemEspaço.length}`);