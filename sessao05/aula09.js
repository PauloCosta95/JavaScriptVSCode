/* ######################## Hoisting ######################## */

console.log(nome); // Isso não causará um erro de referência, mas 'nome' será 'undefined' devido ao hoisting

var nome = "Geek"; // declarando e iniciando a variável 'nome' com o valor 'Geek'

console.log(nome);

// O que acontece aqui é que a declaração da variável 'nome' é "içada" (hoisted) para o topo do escopo,
// mas a atribuição do valor 'Geek' não é. Portanto, quando tentamos acessar 'nome' antes da atribuição,
// ele existe, mas seu valor é 'undefined'. Depois da linha onde 'nome' é atribuído, ele passa a ter o valor 'Geek'.


console.log(idade + 4); 

var idade = 23;
console.log("🚀 ~ idade:", idade)
