const urlServer = "http://localhost:3008/usuario/";

document.addEventListener('DOMContentLoaded', function () {
    const perfilLink = document.getElementById('perfilLink');
    const logoutButton = document.getElementById('logoutButton');

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
        window.location.href = './index.html';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    checkLogin();
});
