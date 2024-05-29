document.addEventListener('DOMContentLoaded', function () {
    let cardContainer = document.querySelector('#cardContainer .row');

  
    function checkLogin() {
        const userData = localStorage.getItem('userData');
        const perfilLink = document.getElementById('perfilLink');
        const logoutButton = document.getElementById('logoutButton');
        
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
        window.location.href = '/TarefaBootStrap/index.html'; 
    }

    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }


    checkLogin();

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
