document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});


if (localStorage.getItem('login') && localStorage.getItem('senha')){
    document.querySelector('#login').value = localStorage.getItem('#login')
    document.querySelector('#senha').value = localStorage.getItem('#senha')
}

function checkLogin() {
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;


    console.log(login + ' ' + senha);


    if (login == 'admin' && senha == '123456') {
        localStorage.setItem('login', login);
        localStorage.setItem('password', senha);


        window.location.href = 'home.html';
    }
    else {
        document.querySelector('#mensagem').innerHTML = 'Login ou senha inválidos';
    }
}

// function ler(){
//     var login = localStorage.getItem('login')
//     var password = localStorage.getItem('password')

//     console.log(login,password)
// }