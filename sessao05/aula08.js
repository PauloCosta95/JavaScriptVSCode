/* ######################## Template Strings ######################## */

let idade = 19;
const nome = "Geek";

function incrementaIdade(idade) {
  return idade + 3;
}

console.log(nome + " tem " + idade + " anos.");

console.log(`${nome} tem ${incrementaIdade(idade)} anos.`); // Template String usando crase e ${} para interpolação de variáveis

/*
Em template strings usa-se a cráse e não aspas simples ou acento agudo

Não é '
Não é á
É `
*/
