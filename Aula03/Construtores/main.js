class Cliente {

    #nome;
    #ano;
    constructor(_nome, _ano) {

        this.#nome = _nome;
        this.#ano = _ano;

    }
    get nome() {
        return this.#nome;
    }

    get ano() {
        return this.#ano;
    }

    print() {
        console.log(`Nome: ${this.nome} 
      Idade: ${this.ano}`);
    }

}

let lstClientes = [];
lstClientes.push(new Cliente('Cliente 1', 20));
lstClientes.push(new Cliente('Cliente 2', 37));
lstClientes.push(new Cliente('Cliente 3', 44));
lstClientes.push(new Cliente ('Cliente 4', 66));

function mostrarClientes() {
    for (let cliente of lstClientes) {
        cliente.print();

    }
}

mostrarClientes();




