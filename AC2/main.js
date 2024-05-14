document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        fetch('http://localhost:3001/Usuario')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na solicitação ao servidor.');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const usuarioEncontrado = data.find(usuario => usuario.email === email && usuario.senha === senha);
                    
                    if (usuarioEncontrado) {
                        window.location.href = 'home.html';
                    } else {
                        const erroEmail = document.querySelector('.erro-email');
                        const erroSenha = document.querySelector('.erro-senha');
                        
                        erroEmail.textContent = '';
                        erroSenha.textContent = '';

                        if (!data.find(usuario => usuario.email === email)) {
                            erroEmail.textContent = '[Usuário não encontrado]';
                            
                        } else {
                            erroSenha.textContent = 'Senha incorreta.';
                        }
                    }
                } else {
                    console.error('Formato de resposta inválido:', data);
                }
            })
            .catch(error => console.error('Erro ao tentar verificar o usuário:', error));
    });
});



function sair() {
  window.location.href = 'login.html';
}
