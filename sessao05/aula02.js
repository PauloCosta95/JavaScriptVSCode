/*
 
 Aula 02 - Arrays em JavaScript

 array contendo 5 elementos -> n = 5
 índice: [0][1][2][3][4] // indices -> posição do elemento no array
 valores: [10, 20, 30, 40, 50] // valores -> conteúdo do elemento no array
 valores misturados: [10, 'Olá', true, 25.5, null] // valores misturados -> diferentes tipos de dados

 // Detalhes sobre arrays
 - Possuem tamanho infinito
 - Podemos colocar qualquer tipo de dados
 - Podemos misturar tipos de dados
 - Podemos acessar os elementos através do índice
 - O índice começa em 0
 - Arrays são objetos especiais 
*/

/*  -----  Como criar um array em JavaScript  -----  */

// 1. Forma 1
var alunos = new Array('Cristina', 'João', 'Maria', 'Pedro', 'Jonas'); // cria um array com elementos
// var alunos = ['Cristina', 'João', 'Maria', 'Pedro', 'Jonas']; // outra forma de criar um array
console.log(alunos); // exibe o array completo

// 2. Forma 2 (mais comum)
var notas = [8.5, 7.0, 9.5, 6.0, 10.0]; // cria um array com elementos
console.log(notas); // exibe o array completo

// Criando um array vazio e adicionando elementos depois
var frutas = []; // cria um array vazio
console.log("🚀 ~ frutas:", frutas);
frutas[0] = 'Maçã'; // adiciona o elemento 'Maçã' na posição 0
frutas[1] = 'Banana'; // adiciona o elemento 'Banana' na posição 1
frutas[2] = 'Laranja'; // adiciona o elemento 'Laranja' na posição 2
console.log(frutas); // exibe o array completo

/*  -----  Como acessar os elementos de um array  -----  */

// 1. Acessando elementos pelo índice
console.log("🚀 ~ Aluno na posição 0:", alunos[0]);
console.log("🚀 ~ Aluno na posição 2:", alunos[2]);

/*  -----  Como alterar os elementos de um array  -----  */

// alterando o valor a partir do indice
console.log("🚀 ~ Notas antes da alteração:", notas);
notas[3] = 7.5; // altera o valor na posição 3
console.log("🚀 ~ Notas após a alteração:", notas);


// Atenção ao acessar um valor com um indice que não existe
notas[9] = 10 // Não existe!
console.log("🚀 ~ Notas após adicionar na posição 9:", notas);

console.log(notas[5]); // undefined -> valor indefinido, pois o índice 5 não existe no array
console.log(notas[6]); // undefined
console.log(notas[7]); // undefined
console.log(notas[8]); // undefined
console.log(notas[9]); // 10

console.log(notas[5] == undefined); // true
console.log(notas[6] == undefined); // true
console.log(notas[7] == undefined); // true
console.log(notas[8] == undefined); // true
console.log(notas[9] == undefined); // false

if (notas[5] == undefined) {
  console.log("O índice 5 não existe no array notas.");
  notas[5] = 54; // atribuindo um valor padrão
}

console.log(notas[5]); // 54 -> valor definido, pois o índice 5 foi atribuído um valor no array

console.log(notas[5] == undefined); // false


// Inserindo elementos no final do array
var nomes = ['Ana', 'Bruno', 'Carla'];
console.log("🚀 ~ nomes antes de adicionar:", nomes);

nomes[nomes.length] = 'Daniel'; // adiciona 'Daniel' no final do array
console.log("🚀 ~ nomes após adicionar Daniel:", nomes);

nomes[nomes.length] = 'Eduarda'; // adiciona 'Eduarda' no final do array
console.log("🚀 ~ nomes após adicionar Eduarda:", nomes);

nomes.push('Fabio'); // outra forma de adicionar 'Fabio' no final do array
console.log("🚀 ~ nomes após adicionar Fabio:", nomes);


// Tamanho do array
console.log("🚀 ~ Tamanho do array nomes:", nomes.length);
var tamanhoNomes = nomes.length;
console.log("🚀 ~ tamanhoNomes:", tamanhoNomes);


// ordeanando arrays
var alunos = ['Cristina', 'João', 'Maria', 'Pedro', 'Jonas'];
console.log("🚀 ~ alunos antes de ordenar:", alunos);
alunos.sort(); // ordenação de array de strings, coloca o array em ordem alfabética
console.log("🚀 ~ alunos após ordenar:", alunos);

var precos = [19.99, 5.49, 3.50, 12.00, 7.25];
console.log("🚀 ~ precos antes de ordenar:", precos);
precos.sort(); // ordenação de array de números, mas como são tratados como strings, a ordenação pode não ser numérica correta
console.log("🚀 ~ precos após ordenar:", precos);


var idades = [25, 10, 5, 40, 15];
idades.sort(function (a, b) {
  return a - b; // ordenação numérica correta
});
console.log("🚀 ~ idades antes de ordenar:", idades);
idades.sort(function (a, b) {
  return a - b; // ordenação numérica correta
});
console.log("🚀 ~ idades após ordenar:", idades);


// remover dados de um array
var carros = ['Ford', 'Chevrolet', 'Toyota', 'Honda', 'Nissan'];
console.log("🚀 ~ carros antes de remover:", carros)
carros.pop(); // remove o último elemento do array
console.log("🚀 ~ carros após remover o último elemento:", carros)
carros.shift(); // remove o primeiro elemento do array
console.log("🚀 ~ carros após remover o primeiro elemento:", carros)
carros.splice(1, 1); // remove 1 elemento a partir do índice 1
console.log("🚀 ~ carros após remover o elemento na posição 1:", carros)
// carros agora é ['Chevrolet', 'Honda']
// delete carros[0]; // remove o elemento na posição 0, mas deixa um "buraco" (undefined)
// console.log("🚀 ~ carros após deletar o elemento na posição 0:", carros)
// carros agora é [undefined, 'Honda']


carros.splice(1, 0, 'Volkswagen', 'Audi', 'Ferrari', 'Lamborghini'); // A paritir do índice 1, remove 0 elementos e adiciona os novos elementos
console.log("🚀 ~ carros após adicionar novos elementos a partir da posição 1:", carros)


// Iterar em um array
for(var i = 0; i < carros.length; i++) {
  console.log("🚀 ~ carro na posição", i, ":", carros[i]);
}


// Removendo elementos duplicados de um array
var numeros = [1, 2, 3, 2, 4, 3, 5, 1, 6];
console.log("🚀 ~ numeros antes de remover duplicados:", numeros);
var numerosUnicos = []; // array para armazenar números únicos

for (var i = 0; i < numeros.length; i++) {
  if (numerosUnicos.indexOf(numeros[i]) === -1) {
    numerosUnicos.push(numeros[i]); // adiciona o número se não estiver presente
  }
}

console.log("🚀 ~ numeros após remover duplicados:", numerosUnicos);

// Removendo elementos da ultima posição do array
// carros.pop(); // remove o último elemento do array
// console.log("🚀 ~ carros após remover o último elemento novamente:", carros)

var ret = carros.pop(); // remove o último elemento do array e armazena na variável ret
console.log("🚀 ~ Elemento removido armazenado em ret:", ret)
console.log("🚀 ~ carros após remover o último elemento novamente:", carros)


// Removendo o primeiro elemento do array
var primeiro = carros.shift(); // remove o primeiro elemento do array e armazena na variável primeiro
console.log("🚀 ~ Primeiro elemento removido armazenado em primeiro:", primeiro)
console.log("🚀 ~ carros após remover o primeiro elemento novamente:", carros)

// Adicionando elementos no início do array
carros.unshift('Kia'); // adiciona 'Kia' no início do array
console.log("🚀 ~ carros após adicionar Kia no início:", carros)

// retorna um novo array a partir do indice informado 
var novosCarros = carros.slice(3); // cria um novo array a partir do índice 3
console.log("🚀 ~ novosCarros a partir do índice 3:", novosCarros);

var pares = [2, 4, 6, 8, 10, 12, 14, 16];
var impares = [1, 3, 5, 7, 9, 11, 13, 15];

var rest = pares.concat(impares); // concatena os dois arrays
console.log("🚀 ~ Array resultante da concatenação de pares e impares:", rest);


rest = impares.concat(pares); // concatena os dois arrays na ordem inversa
console.log("🚀 ~ Array resultante da concatenação de impares e pares:", rest);

rest.sort(function(a, b) {
  return a - b; // ordenação numérica correta
});
console.log("🚀 ~ Array resultante após ordenar o array concatenado:", rest);


// 4 x 4

var tabueiro = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

console.log("🚀 ~ tabueiro:", tabueiro);
console.log("🚀 ~ Elemento na posição [2][3]:", tabueiro[2][3]); // linha 2 coluna 3

