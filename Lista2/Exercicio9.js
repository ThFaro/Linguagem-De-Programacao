/*
9. Dado o objeto endereco com propriedades como rua, numero, bairro e cidade. 
Faça um loop que mostre todas as propriedades e seus valores de forma genérica.
*/

const endereco = {
    rua: 'Rapahel Dias da Silva',
    numero: 950,
    bairro: 'Campolim',
    cidade: 'Sorocaba'
};

for (const prop in endereco) {
    const valor = endereco[prop];
    console.log(`Propriedade: ${prop}, Valor: ${valor}`);
}
