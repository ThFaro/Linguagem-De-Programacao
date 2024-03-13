/*
10. Escreva uma função chamada alunosMaior que recebe um array de objetos Alunos (criado acima) 
como entrada e retorna um novo array com apenas os alunos com idade acima de 18 anos.
*/

Alunos = [
    { Nome: 'Thiago', idade: 37 },
    { Nome: 'Laura', idade: 36 },
    { Nome: 'Lucas', idade: 16 },
    { Nome: 'Rafaela', idade: 17 }
];

function alunoMaior(alunos) {
    const maioresIdade = [];

    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];

        if (aluno.idade >= 18) {
            maioresIdade.push(aluno);
        }
    }

    return maioresIdade;
}

console.log(alunoMaior(Alunos));
