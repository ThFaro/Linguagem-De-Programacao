

class ContaBancaria {

    #saldo;

    constructor(valorInicial) {

        this.#saldo = valorInicial;
        console.log(`Saldo Inicial: R$ ${this.#saldo} `);
    }


    depositar(valor) {

        this.#saldo += valor;
        console.log(`Deposito: R$ ${valor}`);
    }


    sacar(valor) {

        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque: R$ ${valor}`);

        } else {
            console.log("Saldo insuficiente!");
        }
    }


    saldoAtual() {
        return `Seu saldo atual é de: R$ ${this.#saldo}`;
    }
}
