/*
6. Crie um objeto chamado aluno com as propriedades nome, idade, curso e matrícula. Adicione 
um método chamado mostrarinformacoes que exibe todas as informações do aluno.
*/

aluno = {
    'nome': 'Thiago Faro',
    'idade': 37,
    'curso': 'ADS',
    'matricula': 235553,

    mostrarInformacoes: function () {
        return this.nome + " " + this.idade + " " + this.curso + " " + this.matricula
    }
}

console.log(aluno.mostrarInformacoes());