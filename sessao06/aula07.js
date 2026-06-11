/* ######################## Funções Anônimas (Lambdas) ######################## */

// Função Anônima (Lambda) - é uma função sem nome, que pode ser atribuída a uma variável ou passada como argumento para outra função.

let numeros = [1, 2, 3, 4, 5, 6];

function dobrar(valor) {
  return valor * 2;
}

let res1 = numeros.map(dobrar);
console.log("res1:", res1);

// Usando uma função anônima (lambda) diretamente no map

let res2 = numeros.map(function (valor) {
  return valor * 2;
});
console.log("res2:", res2);

console.log("Resultado da função dobrar:", dobrar(9));

const outra = function (valor) {
  return valor * 2;
};
console.log("Resultado da função outra:", outra(9));

function somar(num1, num2) {
  return num1 + num2;
}

let mostrar = function (num1, num2, calculo = somar) {
  console.log("Resultado da função mostrar:", calculo(num1, num2));
};

mostrar(2, 4); // Usando a função somar como padrão 6

mostrar(6, 9, somar); // 15

mostrar(3, 6, function (n1, n2) {
  return n1 + n2;
}); // 9

// Usando uma Arrow Function (função anônima mais curta)

mostrar(3, 6, (v1, v2) => v1 * v2);

let res3 = numeros.map((valor) => valor * 2);
console.log("res3:", res3);
