/* 
Faça um programa que mostre os números impares em um intervalo de 0 a 100
*/
nuemrosImpar = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    nuemrosImpar.push(i);
  }
}

console.log(`
Números impares em um intervalo de 0 a 100:

[${nuemrosImpar}]
`);