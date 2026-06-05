// Filter

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
function filtrar_pares(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(filtrar_pares);

console.log(numerosPares); // [2, 4, 6, 8, 10]

function filtrar_impares(numero) {
  return numero % 2 !== 0;
}

const numerosImpares = numeros.filter(filtrar_impares);

console.log(numerosImpares); // [1, 3, 5, 7, 9]

// Filtrar números maiores que 5
function filtrar_multiplos_5(numero) {
  return numero % 5 === 0;
}

const numerosMultiplosDe5 = numeros.filter(filtrar_multiplos_5);
console.log(numerosMultiplosDe5); // [5, 10]



var alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 22 },
  { nome: "Daniel", idade: 15 },
];

// Filtrar alunos maiores de idade (18 anos ou mais)
function filtrar_maiores_de_idade(aluno) {
  return aluno.idade >= 18;
}

var alunos_maiores = alunos.filter(filtrar_maiores_de_idade);

console.log(alunos_maiores);
// [
//   { nome: "Ana", idade: 20 },
//   { nome: "Carla", idade: 22 }
// ]