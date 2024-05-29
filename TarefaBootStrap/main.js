
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const errorToastEl = document.getElementById('errorToast');
    const successToastEl = document.getElementById('successToast');
    const errorToast = new bootstrap.Toast(errorToastEl);
    const successToast = new bootstrap.Toast(successToastEl);

    loginButton.addEventListener('click', function () {
        const email = document.getElementById('floatingInput').value.trim();
        const password = document.getElementById('floatingPassword').value.trim();

        fetch('http://localhost:3008/usuario')
            .then(response => response.json())
            .then(usuarios => {
                const usuario = usuarios.find(u => u.email === email && u.password === password);
                if (usuario) {
                    localStorage.setItem('userData', JSON.stringify(usuario));
                    successToast.show();
                    setTimeout(function () {
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    errorToast.show();
                }
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error);
                errorToast.show();
            });
    });
});


