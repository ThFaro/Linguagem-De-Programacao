
/* FUNÇÃO ANONIMA 
Muito usada para atribuir algum evento a uma ação especifica. Ex: clicar em um botão */

let soma = function (a, b) {
    let resultado = a + b;
    return `RESULTADO: ${resultado}`;

}
console.log(soma(2, 3));

/* ARROW FUNCTION
 Também é um tipo de função anonima, porém com uma escrita mais limpa
*/

let nomeCompleto = (primeiroNome, ultimoNome) => primeiroNome + " " + ultimoNome;
console.log('Thiago', 'Ribeiro');

// ARRAY

let array = ['Sorocaba', 'Itu', 'Piedade', 'Tatui'];
let cidade = ['Sorocaba', 60345, true]; // em javascript o array aceita mias de um tipo de dado

console.log(cidade[0]);
console.log(cidade[1]);
console.log(cidade[2]);

/*
NESTED ARRAY(MATRIZ ANINHADA)
*/

let matriz = [['Fabio', 50], ['Thago', 37], ['Laura', 36]];
console.log(matriz);
console.log(matriz[0]);
console.log(matriz[0][0]);

/*
ITERANDO COM ARRAY
*/

for (let i = 0; i < array.length; i++) {
    console.log(array[i])   
}

for (let item of array){
    console.log(item)
}

// Adicionar item no final do array: .push
// Adicionar item no inicio do array: .unshift


matriz.push(['Nair',60]);
matriz.unshift(['Roberto',68]);

// Remover item do final do array: .pop
// Remover item do inicio do array: .shift

console.log(matriz);

// CRIANDO UM OBJETO

let pessoa = {
    'nome':'João',
    'idade': 45,
    'isAtivo': true
}

console.log(pessoa);
console.log(pessoa['nome']);
console.log(pessoa.nome);
console.log(pessoa.idade);

// Trazendo as propriedades do objeto

for (let prop in pessoa) {
    console.log(prop);
        
    }