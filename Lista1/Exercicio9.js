/*
Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido 
ou false caso contrário. 
Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto'.' após o '@'.
*/


function validarEmail(email) {

    const emailValido = /^[^\s@!#$%&*()+=`{}|<>?/,]+@[^\s@!#$%&*()+=`{}|<>?/,]+\.[^\s@!#$%&*()+=`{}|<>?/,]+$/;

    return emailValido.test(email);
}

console.log(validarEmail('thiago@gmail.com.br'));
console.log(validarEmail('thi@go@gmail.com'));
console.log(validarEmail('thiago.gmail.com'));


//OBS: Resolvi usando expressão regular pois achei que o código fica mais limpo e legível.