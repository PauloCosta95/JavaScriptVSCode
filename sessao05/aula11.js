/* ######################## Tratamento de ERROS com Try Catch ######################## */

// console.log(nome); // Isso causará um erro de referência, pois 'nome' não foi declarado ou definido antes deste ponto

// console.log('Oi....'); // Esta linha não será executada devido ao erro na linha anterior

// console.log(4.Oi()); // Isso causará um erro de sintaxe, pois '4.Oi()' não é uma expressão válida

// Tratamos erros com try-catch para evitar que o programa seja interrompido por erros não tratados
try {
  console.log(nome); // Isso causará um erro de referência, pois 'nome' não foi declarado ou definido antes deste ponto
} catch (error) {
  console.log("Ocorreu um erro"); // Captura o erro e exibe a mensagem de erro
  console.log(error.name); // Exibe o nome do erro (ReferenceError)
  console.log(error.message); // Exibe a mensagem de erro detalhada, indicando que 'nome' is not defined
}

console.log("Oi...."); // Esta linha será executada normalmente, pois o erro anterior foi tratado com try-catch

// Lançando um erro manualmente

function dividir(a, b) {
  if (a === 0 || b === 0) {
    throw "Os valores devem ser positivos e diferentes de zero."; // Lança um erro com a mensagem especificada
  } else {
    return a / b; // Retorna o resultado da divisão se os valores forem válidos
  }
}

let ret = dividir(8, 2);
console.log("🚀 ~ ret:", ret);

try {
  let ret2 = dividir(0, 2);
  console.log("🚀 ~ ret2:", ret2); // Isso não será executado, pois a função dividir lançará um erro devido ao valor 0 para 'a'
} catch (error) {
  console.log("Ocorreu um erro na divisão");
  console.log(error); // Exibe a mensagem de erro lançada pela função dividir
} finally {
  console.log("Vamos continuar..."); // Esta linha será executada independentemente de ocorrer um erro ou não
}
