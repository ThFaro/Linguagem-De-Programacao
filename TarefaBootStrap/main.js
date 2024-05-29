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

document.addEventListener('DOMContentLoaded', function () {
    let cardContainer = document.querySelector('#cardContainer .row');

    fetch('http://localhost:3008/produtos')
        .then(response => response.json())
        .then(produtos => {
            produtos.forEach(produto => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('col', 'mb-4');

                cardElement.innerHTML = `
                    <div class="card h-100 d-flex flex-column">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${produto.nome}</h5>
                            <p class="card-text">${produto.descricao}</p>
                            <p class="card-text"><strong>R$ ${produto.preco.toFixed(2)}</strong></p>
                            <a href="#" class="btn btn-primary mt-auto">Comprar</a>
                        </div>
                    </div>
                `;

                cardContainer.appendChild(cardElement);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });
});


