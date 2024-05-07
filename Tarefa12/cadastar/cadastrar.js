document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

if (id) {
    var nome = document.querySelector('#nome');
    var email = document.querySelector('#email');
    var idade = document.querySelector('#idade');

    fetch(`${urlServer}/${id}`)
    .then(response => response.json())
    .then(data => {
        nome.value = data.nome;
        email.value = data.email;
        idade.value = data.idade;
    });

    document.querySelector('#btn-cadastrar').innerHTML = 'Atualizar';
    document.querySelector('#btn-cadastrar').onclick = atualizar;
} else {
    document.querySelector('#btn-cadastrar').onclick = cadastrar;
}

function atualizar() {
    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var idade = document.querySelector('#idade').value;


    var clientes = {
        "nome": nome,
        "idade": idade,
        "email": email
    };


    fetch(`${urlServer}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientes)
    })
    .then(() => window.location.href = '../index.html');
}

function cadastrar() {
    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var idade = document.querySelector('#idade').value;

    var clientes = {
        "nome": nome,
        "email": email,
        "idade": idade
    };

    fetch(`${urlServer}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientes)
    })
    .then(() => window.location.href = '../index.html');
}
