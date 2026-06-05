/* ######################## VAR ######################## */

var numero = 42;
console.log("🚀 ~ numero:", numero);

numero = numero + 18;
console.log("🚀 ~ numero:", numero);

for (var iVar = 0; iVar < 5; iVar++) {
  var valorVar = iVar * 3;
  console.log("🚀 ~ valor:", valorVar);
}
console.log("🚀 ~ valor var:", valorVar); // valor ainda é acessível fora do loop, o que pode causar problemas de escop
console.log("🚀 ~ i var:", iVar); // i também é acessível fora do loop, o que pode causar problemas de escopo

var numeroVar = 80;
console.log("🚀 ~ numeroVar:", numeroVar);

var numeroVar = 100; // redeclaração é permitida com var
console.log("🚀 ~ numeroVar redeclarado:", numeroVar);


/* ######################## LET ######################## */
let outro_numero = 42;
console.log("🚀 ~ outro_numero:", outro_numero);

outro_numero = outro_numero + 18;
console.log("🚀 ~ outro_numero:", outro_numero);

let nome = "Geek";
console.log("🚀 ~ nome:", nome);

nome = "University";
console.log("🚀 ~ nome:", nome);

for (let i = 0; i < 5; i++) {
  let valor = i * 3;
  console.log("🚀 ~ valor:", valor);
}
// console.log("🚀 ~ valor let:", valor); // valor não é acessível fora do loop
// console.log("🚀 ~ i let:", i); // i também não é acessível fora do loop

let outro_numero_let = 80;
console.log("🚀 ~ outro_numero_let:", outro_numero_let);
// let outro_numero_let = 100; // redeclaração não é permitida com let, isso causará um erro



/* ######################## CONST ######################## */

const TAXA = 1.44;
console.log("🚀 ~ TAXA:", TAXA);

let res = 45 * TAXA;
console.log("🚀 ~ res:", res);

// TAXA = 2.0; // isso causará um erro, pois não é possível reatribuir um valor a uma constante // TypeError: Assignment to constant variable.
console.log("🚀 ~ TAXA:", TAXA);

// Constante vs Mutabilidade
const curso = {nome: "Programação em JS"};
console.log("🚀 ~ curso:", curso);

// Nãi é possível reatribuir um novo valor a uma constante, mas é possível modificar as propriedades de um objeto declarado com const
// curso = 43; // isso causará um erro, pois não é possível reatribuir um valor a uma constante // TypeError: Assignment to constant variable.

// Modificando a propriedade do objeto curso
curso.nome = "Programação em JavaScript"; // é possível modificar as propriedades de um objeto declarado com const, MUTAÇÃO
console.log("🚀 ~ curso modificado:", curso);



/* ######################## DICAS ######################## */

/*
Dicas de boas práticas:
- Use const por padrão para declarar variáveis, a menos que você saiba que precisará reatribuir um valor, nesse caso use let.
- Evite usar var, pois ela tem escopo de função e pode levar a bugs difíceis de detectar devido ao seu comportamento de hoisting.
- Use nomes de variáveis descritivos para tornar o código mais legível e fácil de entender.
- Evite redeclarar variáveis com var, isso pode causar confusão e erros no código.
- Lembre-se de que as constantes não podem ser reatribuídas, mas os objetos declarados com const podem ter suas propriedades modificadas.


Dicas de como declarar variaveis en JS:

- A variavel poderá ser alterada? (vai variar?) -> Se sim, use let.
- A variaver será constante? (não vai variar?) -> se sim, use const.
*/

const valor = 5;

for(let i = 0; i < 3; i++) {
  console.log("Valor dentro do loop:", valor - i); // Valor dentro do loop: 5, Valor dentro do loop: 4, Valor dentro do loop: 3
}