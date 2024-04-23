let listaClientes = [];


function adicionarCliente() {
    let nome = document.querySelector('#nome').value;

    listaClientes.push(nome);
    AtualizarLista();
}


function AtualizarLista() {
    let lista = document.querySelector('#listaClientes');


    lista.innerHTML = '';


    listaClientes.forEach((cliente, index) => {
        lista.innerHTML += `<li id="${index}">${cliente} <button onClick="apagar('${index}')">Apagar</button></li>`;
    });


    document.querySelector('#nome').value = '';
}


function apagar(index) {
    listaClientes.splice(index, 1);


    AtualizarLista();
}
