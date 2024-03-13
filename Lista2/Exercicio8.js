/*
8. Crie um objeto chamado produto com as propriedades nome, preco, quantidade e calcularTotal.
O método calcular Total deve retornar o preço total do produto (preço multiplicado pela quantidade).
*/

produtdo = {
    'nome': 'Notebook',
    'preco': 5999.50,
    'quantidade': 5,

    calcularTotal: function () {
        return `
        Produto: ${this.nome}
        Preço: R$ ${this.preco}
        Quantidade: ${this.quantidade}
        Total: R$ ${this.preco * this.quantidade}
        `
    }
}


console.log(produtdo.calcularTotal());