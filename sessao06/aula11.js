/* ######################## Função Fabrica - Function Factory ######################## */

function fabricar_curso(n, p) {
  const discount = 0.9;
  return {
    nome: n,
    preco: (p * discount).toFixed(2),
  };
}

console.log(fabricar_curso("Programação em JavaScript", 27.99));
console.log(fabricar_curso("Programação em Django", 35.99));

let cursos = [];

for (let i = 0; i < 5; i++) {
  cursos.push(fabricar_curso(`Curso ${i + 1}`, `${19.99 + i * 3}`));
}

console.log("🚀 ~ cursos:", cursos);

// Este tipo de função devolve um objecto

