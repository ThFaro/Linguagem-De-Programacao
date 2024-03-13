class Pessoa {
    #codigo
    #nome
    #automoveis

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automoveis = [];
    }

    get codigo() {
        return this.#codigo;
    }

    inserirAutomovel(automovel) {
        this.#automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {

        let index = this.#automoveis.findIndex(automovel => automovel.codigo === codigo);

        if (index !== -1) {
            this.#automoveis.splice(index, 1);
        }
    }

    getAutomovel(codigo) {


        return this.#automoveis.find(automovel => automovel.codigo === codigo);
    }

    imprimir() {
        return `==============================
Código: ${this.#codigo}\n Nome: ${this.#nome}`;
    }

    imprimirCompleto() {
        let dadosPessoa = this.imprimir();
        let automoveis = this.#automoveis.map(automovel => automovel.imprimir()).join('\n    ');

        return `${dadosPessoa}\nAutomóveis:\n    ${automoveis}`;
    }
}

class Automovel {
    #codigo
    #marca
    #modelo

    constructor(codigo, marca, modelo) {
        this.#codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    }

    get codigo() {
        return this.#codigo;
    }

    imprimir() {
        return `Código: ${this.#codigo}, Marca: ${this.#marca}, Modelo: ${this.#modelo}`;
    }
}