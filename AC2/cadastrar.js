function validarCadastro(nome, email, senha) {
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        return false;
    }
    return true;
}

function cadastrarUsuario(nome, email, senha) {
    fetch('http://localhost:3001/Usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Usuário cadastrado com sucesso!");
            window.location.href = 'login.html';
        } else {
            throw new Error('Erro ao cadastrar usuário');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const btnCadastrar = document.getElementById('btnCadastrar');

    btnCadastrar.addEventListener('click', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (validarCadastro(nome, email, senha)) {
            cadastrarUsuario(nome, email, senha);
        } else {
            console.error('Todos os campos são obrigatórios.');
        }
    });
});
