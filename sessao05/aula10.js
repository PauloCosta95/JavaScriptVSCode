/* ######################## Destructuring ######################## */

// Destructuring é uma expressão do JavaScript que permite extrair dados de arrays ou objetos e atribuí-los a variáveis de forma mais concisa e legível.

// destructuring com array
const numeros = [1, 3, 5, 7];

const [num1, num2, num3, num4] = numeros; // usando destructuring para extrair os valores do array 'numeros' e atribuí-los às variáveis num1, num2, num3 e num4

console.log("🚀 ~ num1:", num1);
console.log("🚀 ~ num2:", num2);
console.log("🚀 ~ num3:", num3);
console.log("🚀 ~ num4:", num4);

//Podemos descartar valores

const [n1, , n3, n4] = numeros; // usando destructuring para extrair os valores do array 'numeros' e atribuí-los às variáveis n1, n3 e n4, descartando o segundo valor

console.log("🚀 ~ n1:", n1);
console.log("🚀 ~ n3:", n3);
console.log("🚀 ~ n4:", n4);

// Podemos colocar valor default que será usado caso não exista no contexto do array

const [nu1, nu2, nu3, nu4 = 34, nu5 = 99, nu6] = numeros; // usando destructuring para extrair os valores do array 'numeros' e atribuí-los às variáveis nu1, nu2, nu3, nu4 e nu5, onde nu5 recebe um valor default de 99 caso não exista um quinto valor no array

console.log("🚀 ~ nu1:", nu1);
console.log("🚀 ~ nu2:", nu2);
console.log("🚀 ~ nu3:", nu3);
console.log("🚀 ~ nu4:", nu4);
console.log("🚀 ~ nu5:", nu5);
console.log("🚀 ~ nu6:", nu6);


// Destructuring com objeto
const produto = {
    nome: "Smartphone",
    preco: 999.99,
}

const {nome, preco} = produto; // usando destructuring para extrair os valores do objeto 'produto' e atribuí-los às variáveis nome e preco

console.log("🚀 ~ nome:", nome);
console.log("🚀 ~ preco:", preco);

console.log(`O produto ${nome} custa ${preco}€.`); // usando template string para exibir o nome e o preço do produto de forma mais legível


// const {n} = produto;

// console.log("🚀 ~ n:", n); // isso resultará em 'undefined' porque a propriedade 'n' não existe no objeto 'produto'

const {nome} = produto; // usando destructuring para extrair o valor da propriedade 'nome' do objeto 'produto' e atribuí-lo à variável nome

console.log("🚀 ~ nome:", nome); // isso resultará em 'Smartphone' porque a propriedade 'nome' existe no objeto 'produto' e tem o valor 'Smartphone'