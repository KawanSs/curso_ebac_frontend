function multiplicacao(a: number, b: number): number{
    return a * b
};

function saudacao(nome: string): string{
    return `Olá ${nome}`;
}

const conta = multiplicacao(12, 45);
const pessoa = saudacao('Kawan');

console.log(`${pessoa}, o resultado da sua multiplicação é: ${conta}.`)