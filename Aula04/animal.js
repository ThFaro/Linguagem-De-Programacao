let animais = [];

class Animal {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const animal1 = new Animal('Toto', 10);
const animal2 = new Animal('Maia', 4);
const animal3 = new Animal('Charlie', 12);
const animal4 = new Animal('Nina', 1);
const animal5 = new Animal('Maia', 2);

animais.push(animal1, animal2, animal3, animal4, animal5);

const resultado = animais.filter(animal => animal.idade > 5);

console.log(resultado);
console.log(animais);

