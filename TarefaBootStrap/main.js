document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        var email = document.getElementById('floatingInput').value;
        var password = document.getElementById('floatingPassword').value;

        fetch('http://localhost:3008/usuario')
        .then(response => response.json())
        .then(usuarios => {
            const usuario = usuarios.find(u => u.email === email && u.password === password);
            if (usuario) {
                var successToastEl = document.getElementById('successToast');
                var successToast = new bootstrap.Toast(successToastEl);
                successToast.show();
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                var errorToastEl = document.getElementById('errorToast');
                var errorToast = new bootstrap.Toast(errorToastEl);
                errorToast.show();
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
        });
    });
});
