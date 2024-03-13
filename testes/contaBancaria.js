class ContaBancaria {
    #saldo;

    constructor(valorInicial) {
        this.#saldo = valorInicial;
        console.log(`Saldo inicial: R$ ${this.#saldo}`);

    }
    depositar(valor){
        this.#saldo += valor;
        console.log(`Valor depositado: R$ ${valor}`);
        
    }

    sacar(valor){
        this.#saldo -=valor;
        console.log(`Valor sacado: R$ ${valor}`);

    }

    saldoAtual(){
        return `Saldo atual: R$ ${this.#saldo}`;
    }


}

conta = new ContaBancaria(100);

conta.depositar(200);
conta.sacar(50);

const saldoAtual = conta.saldoAtual();
console.log(saldoAtual);