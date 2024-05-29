document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const idade = document.getElementById('idade').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmSenha = document.getElementById('confirmSenha').value.trim();

        if (!nome || !cpf || !email || !telefone || !idade || !senha || !confirmSenha) {
            errorToast.show();
            return;
        }

        if (senha !== confirmSenha) {
            errorToast.show();
            return;
        }

        const userData = {
            nome,
            cpf,
            email,
            telefone,
            idade,
            password: senha
        };

        fetch('http://localhost:3008/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na comunicação com o servidor.');
            }
            return response.json();
        })
        .then(() => {
            setTimeout(() => {
                window.location.href = '../Login.html';
            });
        })
        .catch((error) => {
            console.error('Erro:', error);
            errorToast.show();
        });
    });
    function checkLogin() {
        const userData = localStorage.getItem('userData');
        const perfilLink = document.getElementById('perfilLink');
        if (userData) {
            perfilLink.classList.remove('disabled');
        } else {
            perfilLink.classList.add('disabled');
        }
    }

    checkLogin();
});
