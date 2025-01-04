"use strict";
function multiplicacao(a, b) {
    return a * b;
}
;
function saudacao(nome) {
    return `Olá ${nome}`;
}
const conta = multiplicacao(12, 45);
const pessoa = saudacao('Kawan');
console.log(`${pessoa}, o resultado da sua multiplicação é: ${conta}.`);
