let titulo = document.getElementById('titulo');


let titulo2 = document.querySelector('#titulo'); // ID
let paragrafo = document.querySelector('p'); // Tag
let button = document.querySelector('.btn'); // Class


let listaItens = document.querySelectorAll('li');


document.querySelector('#btn1').onclick = function() {
    let img1 = document.querySelector('img');
    img1.src = 'imagens/camel.png';
    img1.setAttribute('width', '50px');
}


document.querySelector('#btn2').onclick = function() {
    document.querySelector('audio').play();
}


document.querySelector('#btn3').onclick = function() {
    paragrafo.style.color = 'red';
    paragrafo.style.fontSize = '20px';


    titulo.classList.add('minhaClasse');
}


document.querySelector('#btn4').onclick = function() {
    paragrafo.style.color = '';
    paragrafo.style.fontSize = '';


    titulo.classList.remove('minhaClasse');
}


let buttons = document.querySelectorAll('button');


buttons.forEach(function(button) {
    button.classList.add('btn');
});


let buttons2 = document.querySelectorAll('.btn2');


buttons2.forEach(function(button) {
    button.classList.remove('btn');
   
    button.onclick = function() {
        document.querySelector('#resposta').innerHTML = button.innerHTML;
    }
});
