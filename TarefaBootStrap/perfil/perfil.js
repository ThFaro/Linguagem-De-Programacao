document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profileForm');
    const deleteButton = document.getElementById('deleteProfile');

    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            document.getElementById('nome').value = userData.nome;
            document.getElementById('cpf').value = userData.cpf;
            document.getElementById('email').value = userData.email;
            document.getElementById('telefone').value = userData.telefone;
            document.getElementById('idade').value = userData.idade;
        }
    }

    loadUserData();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const idade = document.getElementById('idade').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmSenha = document.getElementById('confirmSenha').value.trim();

        if (!nome || !cpf || !email || !telefone || !idade || (senha && senha !== confirmSenha)) {
            alert("Erro: Verifique os dados inseridos.");
            return;
        }

        const userData = {
            nome,
            cpf,
            email,
            telefone,
            idade,
            password: senha || JSON.parse(localStorage.getItem('userData')).password,
            id: JSON.parse(localStorage.getItem('userData')).id
        };

        fetch(`http://localhost:3008/usuario/${userData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na comunicação com o servidor. ' + response.statusText);
            }
            return response.json();
        })
        .then(() => {
            localStorage.setItem('userData', JSON.stringify(userData));
            setTimeout(() => {
                window.location.href = '../index.html';
            });
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert("Erro: Verifique os dados inseridos.");
        });
    });

    deleteButton.addEventListener('click', function() {
        if (confirm('Tem certeza de que deseja excluir seu perfil? Esta ação não pode ser desfeita.')) {
            const userId = JSON.parse(localStorage.getItem('userData')).id;
            
            fetch(`http://localhost:3008/usuario/${userId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha na comunicação com o servidor. ' + response.statusText);
                }
                return response.json();
            })
            .then(() => {
                localStorage.removeItem('userData');
                
                setTimeout(() => {
                    window.location.href = '../index.html';
                });
            })
            .catch((error) => {
                console.error('Erro:', error);
                alert("Erro: Verifique os dados inseridos.");
            });
        }
    });

    function checkLogin() {
        const userData = localStorage.getItem('userData');
        if (userData) {
            perfilLink.classList.remove('disabled');
            logoutButton.style.display = 'inline-block';
        } else {
            perfilLink.classList.add('disabled');
            logoutButton.style.display = 'none';
        }
    }

    function logout() {
        localStorage.removeItem('userData');
        checkLogin();
        window.location.href = '../index.html';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    checkLogin();
});
