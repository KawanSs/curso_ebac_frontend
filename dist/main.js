"use strict";

// Cria um array de objetos, onde teremos como atributos do objeto:
// o nome e a nota de alunos; 
var umDiaJaForamAlunos = [{
  nome: 'Gian',
  nota: 10
}, {
  nome: 'Caio',
  nota: 8
}, {
  nome: 'Sidney',
  nota: 6
}, {
  nome: 'Bruno',
  nota: 4
}, {
  nome: 'Leandro',
  nota: 2
}];

// Criar uma função que irá retornar apenas os alunos que tiveram a 
// nota maior ou igual à 6;
function professoresAprovados(professores) {
  return professores.filter(function (professor) {
    return professor.nota >= 6;
  });
}
var passaram = professoresAprovados(umDiaJaForamAlunos);

//**************************************************************** */
// o exercício pareceu muito simples para o módulo que tivemos
// então, se for só isso, descomente a linha abaixo:
// console.log(passaram)
//**************************************************************** */
//**************************************************************** */
// mas se quiser se divertir...

var input = require('readline');
var leitor = input.createInterface({
  input: process.stdin,
  output: process.stdout
});
var alunos = [];
function alunosAprovados(alunos) {
  return alunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
function avaliar() {
  leitor.question('Digite o nome do aluno ou "sair": ', function (nome) {
    if (nome.toLowerCase() === 'sair') {
      var aprovados = alunosAprovados(alunos);
      aprovados.forEach(function (aluno) {
        console.log("O aluno ".concat(aluno.nome, " foi aprovado com nota ").concat(aluno.nota));
        // console.log('Alunos aprovados:', aprovados);
      });
      leitor.close();
    } else {
      leitor.question('Digite a nota do aluno: ', function (nota) {
        alunos.push({
          nome: nome,
          nota: nota
        });
        avaliar();
      });
    }
  });
}
avaliar();