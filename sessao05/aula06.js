// Utilizar Reduce
var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
console.log("🚀 ~ precos:", precos)

var soma = 0;

for (var i = 0; i < precos.length; i++) {
  soma = soma + precos[i];
}

console.log("Soma com for:", soma); // Soma com for: 24.88

soma = 0;

precos.forEach(function(valor) {
   soma += valor;
});

console.log("Soma com forEach:", soma); // Soma com for: 24.88

function somar(anterior, atual) {
  return anterior + atual;
}

var ret = precos.reduce(somar);
console.log("🚀 ~ ret:", ret)

/*
  Como funciona o Reduce?
  O método reduce() executa uma função de redução (que você fornece) em cada elemento do array, resultando em um único valor de saída. Ele pega o valor retornado pela função de redução e o utiliza como o "anterior" para a próxima iteração, até que todos os elementos do array tenham sido processados.

  A função de redução recebe dois argumentos: o valor acumulado (anterior) e o valor atual do array. O resultado da função é armazenado como o novo valor acumulado para a próxima iteração.

  No exemplo acima, a função "somar" é usada como a função de redução para somar todos os valores do array "precos". O resultado final é a soma total dos preços, que é 24.88.

  [4.66, 3.78, 9.78, 1.34, 5.32]

  Primeira execução:
      - Pega os dois primeirs valores (indice 0 e indice 1), soma e retorna esse valor
  Nas demais execuções:
      - Pega o valor retornado da execução anterior e o próximo valor do array, soma e retorna esse valor
      
  1 -> 4.66 + 3.78 = 8.44
  2 -> 8.44 + 9.78 = 18.22
  3 -> 18.22 + 1.34 = 19.56
  4 -> 19.56 + 5.32 = 24.88
*/

// Exemplo map/reduce

function adicionar_taxa(valor) {
  return valor + 5;
}

var retTaxa = precos.map(adicionar_taxa).reduce(somar);
console.log("🚀 ~ retTaxa:", retTaxa);


// Exemplo filter/map/reduce

function preco_maior_que_4(valor) {
  return valor > 4;
}

var retFiltro = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log("🚀 ~ retFiltro:", retFiltro);