
const conta = new ContaBancaria(100);


conta.sacar(50);

conta.depositar(200);

const saldoAtual = conta.saldoAtual();
console.log(saldoAtual);
