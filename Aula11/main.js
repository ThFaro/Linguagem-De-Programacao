// function primeira(){
//     console.log('primeira')
//     segunda(); //encadseamento de funçoes
// }

// function segunda(){
//     console.log('segunda');
// }

// primeira();

// setTimeout(myDisplay,3000) //tempo para disparar a mensagem

// function myDisplay(algumaCoisa){
//     console.log(algumaCoisa);
// }
// function MyDisplayHTML(algumaCoisa) {
//     document.getElementById("demo").innerHTML = algumaCoisa;
// }


// function myCalculator(num1, num2, myCallback){
//     let sum = num1+num2;
//     myCallback(sum)
// }

// myCalculator(5, 5, myDisplay);


// setInterval(resetClock,1000);

// function resetClock(){
//     let date =  new Date();
//     document.querySelector("#clock").innerHTML =
//     date.getHours()+":" +
//     date.getMinutes()+":"+
//     date.getSeconds();
// }


// //Carregando um arquivo para o console do html
// let fileName = "data.txt"

// fetch(fileName)
//     .then(response => response.text())
//     .then(data => console.log(data))

// let fileName ="data.json"

// fetch(fileName) // chamndo do arquivo json
//     .then((response) => response.json())
//     .then(data => console.log(data))


// fetch("https://66302733c92f351c03d923af.mockapi.io/cliente") // chmando do back end criando mno mockapi
//     .then((response) => response.json())
//     .then(data => console.log(data))


// let fileName = "data.json";


// fetch("https://66302733c92f351c03d923af.mockapi.io/cliente") //inserindo tratamento de erro
//     .then(function(response) {
//         return response.json();
//     })
//     .then(data =>
//         { throw new Error('Meu erro customizado!') })
//     .catch(error => console.error('Erro:', error));




// function facaAlgo(data) {
//     data.forEach(cliente => {
//         console.log(`${cliente.name} - (${cliente.age})`);
//     });
// }

// POST
fetch("https://66302734c92f351c03d923c2.mockapi.io/cliente", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Peter Parker',
        age: 25
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));