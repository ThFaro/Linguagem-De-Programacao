// CRIANDO UM OBJETO

let pessoa = {
    'nome': 'João',
    'ultimoNome': 'De Camargo',
    'idade': 45,
    'isAtivo': true,

    //Metodo dentro de um objeto

    nomeInteiro: function () {
        return this.nome + " " + this.ultimoNome
    }
}

console.log(pessoa);
console.log(pessoa['nome']);
console.log(pessoa.nome);
console.log(pessoa.idade);


// Trazendo as propriedades do objeto

for (let prop in pessoa) {
    console.log(prop);

}
console.log(pessoa.nomeInteiro())