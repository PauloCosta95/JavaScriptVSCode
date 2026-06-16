/* ######################## Funções Closures ######################## */

let variavel = "global"; // pode ser acessada globalmente no nosso projeto

function imprimir() {
  console.log("🚀 ~ variavel:", variavel); // imprime a variavel global
}

function outra() {
  let variavel = "local"; // pode ser acessada localmente no nosso projeto
  imprimir();
  console.log("🚀 ~ variavel:", variavel); // imprime a variavel local
}

outra(); // ??

// Novo exemplo
let xuxa = "global";

function externa() {
  let xuxa = "local";

  function interna() {
    return xuxa; // local
  }
  return interna;
}

let executa = externa();
console.log("🚀 ~ executa:", executa()); //local

/*
  Estamos estudando Closures (contexto léxico de uma função)
  Linguagem de Programação chamada Clojure
*/
