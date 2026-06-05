/* ######################## Funções com parâmetro e retorno ######################## */

function calcular_idade1(ano_nascimento) {
    const data = new Date(); // Obter a data atual
    
    const idade = data.getFullYear() - ano_nascimento; // Calcular a idade subtraindo o ano de nascimento do ano atual
    
    return idade; // Retornar a idade calculada
}

function calcular_idade2(ano_nascimento) {
    const data = new Date(); // Obter a data atual
    const idade = data.getUTCFullYear() - ano_nascimento; // Calcular a idade subtraindo o ano de nascimento do ano atual
    console.log("🚀 ~ calcular_idade ~ idade:", idade)
}


let d = new Date(); // Obter a data atual
console.log("🚀 ~ d:", d)
console.log(d); // Exibir a data atual
console.log(d.getFullYear()); // Exibir o ano atual

let ret = calcular_idade1(1995); // Chamar a função calcular_idade com o ano de nascimento 1995 e armazenar o resultado em ret

console.log("🚀 ~ O Zé Manel está vivo a ", ret, "anos"); // Exibir a idade calculada para o ano de nascimento 1995


calcular_idade2(1999); // Chamar a função calcular_idade2 com o ano de nascimento 1999 para exibir a idade calculada no console


const data = new Date(); // Obter a data atual

console.log("🚀 ~ Data Completa:" + data) // Exibir a data atual

console.log("🚀 ~ Ano Atual:" + data.getFullYear()) // Exibir o ano atual

console.log("🚀 ~ Mês Atual:" + (data.getMonth() + 1)) // Exibir o mês atual (adicionando 1, pois os meses são indexados a partir de 0)


/* Fique Esperto! */

function somar(num1, num2) {
    return num1 + num2; // Retorna a soma dos dois números
}

console.log("somar(4, 6): " + somar(4, 6)); // Chama a função somar com os argumentos 4 e 6, e exibe o resultado (10) no console

console.log("somar(4): " + somar(4)); // Chama a função somar com apenas um argumento (4). O segundo argumento será undefined, resultando em NaN (Not a Number) ao tentar realizar a operação de soma. O console exibirá NaN.

console.log("somar(4, 6, 10): " + somar(4, 6, 10)); // Chama a função somar com três argumentos (4, 6 e 10). A função somar só utiliza os dois primeiros argumentos (num1 e num2), então o terceiro argumento (10) será ignorado. O resultado será a soma de 4 e 6, que é 10, e o console exibirá 10.

console.log("somar(): " + somar()); // Chama a função somar sem nenhum argumento. Ambos num1 e num2 serão undefined, resultando em NaN (Not a Number) ao tentar realizar a operação de soma. O console exibirá NaN.

console.log("somar(4, '6'): " + somar(4, "6")); // Chama a função somar com um número (4) e uma string ("6"). O JavaScript converterá a string "6" em número na soma. O resultado será 10, e o console exibirá 10.

console.log("somar('4', '6'): " + somar("4", "6")); // Chama a função somar com duas strings ("4" e "6"). O JavaScript converterá ambas as strings em números na soma. O resultado será 10, e o console exibirá 10.

console.log("somar('4', 6): " + somar("4", 6)); // Chama a função somar com uma string ("4") e um número (6). Como o operador + com string e número faz concatenação, o resultado será "46", e o console exibirá 46.

console.log("somar(true, false): " + somar(true, false)); // Chama a função somar com dois valores booleanos (true e false). O JavaScript converterá true para 1 e false para 0 ao realizar a operação de soma. O resultado será 1, e o console exibirá 1.   

