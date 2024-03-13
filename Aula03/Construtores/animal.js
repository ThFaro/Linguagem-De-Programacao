class Animal {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    print() {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade} 
        Raça: ${this.raca}`);
    }


}

const animal = new Animal('Maia', 5, 'Pastora suiça');
animal.print();