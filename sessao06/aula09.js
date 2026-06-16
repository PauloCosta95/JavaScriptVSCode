/* ######################## Funções Construtoras ######################## */

// Criando uma Função Construtora

function Pessoa(n, s, raca = "Humano") {
  // atributos privados só conseguimos fazer uso dentro da função construtora
  let altura = 0.3;
  let peso = 0.5;
  let idade = 0;
  let nome = n;
  let sexo = s;

  //atributos publico pode ser acessado fora da função construtora
  this.raca = raca;

  // metodo privado so conseguimos fazer uso dentro da função construtora

  let imprimir_dados = function () {
    console.log(
      `Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`,
    );
  };

  // metodo publico conseguimos acessar fora da função construtora
  this.fazer_aniversario = function () {
    idade += 1;
    imprimir_dados();
  };

  this.getIdade = function () {
    return idade;
  };
}

const angelina = new Pessoa("Angelina", "Feminino");
console.log("🚀 ~ angelina:", angelina);
console.log(angelina.peso); // privado
console.log(angelina.raca); // publico

angelina.fazer_aniversario(); //publico
angelina.fazer_aniversario(); //publico

// Instanciar um novo objecto
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log("🚀 ~ felicity.getIdade():", felicity.getIdade())

console.log(typeof(Pessoa)); // Function
console.log(typeof(felicity)); // Object
