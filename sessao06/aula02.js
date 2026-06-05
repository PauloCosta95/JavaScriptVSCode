/* ######################## First Class Citizens ######################## */

function somar(num1, num2) {
    return num1 + num2;
}

somar(4,6); // 10

let res =somar(4,6); // 10

console.log(res); // 10

console.log(somar(10, 5)); // 15

/*Exemplo 1*/

const executar = somar; // Atribuindo a função somar a variável executar
console.log(executar(4, 6)); // 10


/*Exemplo 2*/

function subtrair(num1, num2) {
    return num1 - num2;
}

function faz_algo(num1, num2, procedimento) {
    return procedimento(num1, num2);
}

console.log(faz_algo(5, 5, somar)); // 10
console.log(faz_algo(8, 3, subtrair)); // 5

/*Exemplo 3*/

function outra (procedimento) {
    return procedimento; 
}

const ret = outra(subtrair); // Atribuindo a função subtrair a variável ret
console.log(ret(8, 3)); // 5


/*
    Cidadões de Primeira Classe (First Class Citizens) são entidades que podem ser tratadas como qualquer outra variável.
    Isso significa que elas podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas por outras funções.
    Em JavaScript, as funções são cidadões de primeira classe, o que permite uma grande flexibilidade na programação funcional e na manipulação de funções como objetos de primeira classe.

    First-Class Citizens
    Higher-Order Function
*/

function mensagem(){
    console.log("Olá, sou uma função de primeira classe!");
}

mensagem();
