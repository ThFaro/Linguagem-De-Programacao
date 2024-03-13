/*
2. Defina uma Arrow Function chamada calculaAreaRetangulo que recebe dois parâmetros, 
base e altura, e retorna a área do retângulo. Mostre o resultado no console.
*/

let calculaAreaRetangulo = (base,altura) => `
CALCULANDO A AREA DE UM RETANGULO

Valor da base = ${base} 
Valor da altura = ${altura}
Area total = ${base*altura}
`
console.log(calculaAreaRetangulo(3,20))