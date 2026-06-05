/* ######################## Funções com parâmetros variáveis e valor padrão ######################## */

function somar1() {
  let soma = 0; // Inicializa a variável soma com o valor 0

  for (let i = 0; i < arguments.length; i++) {
    // Loop através dos argumentos passados para a função
    soma += arguments[i]; // Adiciona cada argumento ao valor de soma
  }
  return soma; // Retorna o valor total da soma
}

console.log("somar1(): " + somar1()); // Chama a função somar1 sem nenhum argumento. O loop não será executado, e a função retornará 0. O console exibirá "somar1(): 0".

console.log("somar1(2): " + somar1(2)); // Chama a função somar1 com o argumento 2, e exibe o resultado (2) no console

console.log("somar1(2, 5): " + somar1(2, 5)); // Chama a função somar1 com os argumentos 2 e 5, e exibe o resultado (7) no console

console.log("somar1(1, 2, 3, 4): " + somar1(1, 2, 3, 4)); // Chama a função somar1 com os argumentos 1, 2, 3 e 4. O loop irá iterar sobre os quatro argumentos e calcular a soma total (10). O console exibirá "somar1(1, 2, 3, 4): 10".

console.log("somar1(5, 10, 15, 20, 25): " + somar1(5, 10, 15, 20, 25)); // Chama a função somar1 com os argumentos 5, 10, 15, 20 e 25. O loop irá iterar sobre os cinco argumentos e calcular a soma total (75). O console exibirá "somar1(5, 10, 15, 20, 25): 75".

function imprime_valores(num1, num2) {
    for(let i in arguments) {
        console.log(arguments[i]);
    }
}

imprime_valores(1, 2); // Chama a função imprime_valores com os argumentos 1 e 2. O loop irá iterar sobre os dois argumentos e exibir cada um no console. O console exibirá "1" e "2".

imprime_valores("Olá", "Mundo", "!"); // Chama a função imprime_valores com os argumentos "Olá", "Mundo" e "!". O loop irá iterar sobre os três argumentos e exibir cada um no console. O console exibirá "Olá", "Mundo" e "!".


/*gambiarra 1 */

function somar2(num1, num2, num3) {
    num1 = num1 || 1; // Se num1 for falsy (undefined, null, 0, etc.), atribui 1 a num1
    num2 = num2 || 2; // Se num2 for falsy, atribui 2 a num2
    num3 = num3 || 3; // Se num3 for falsy, atribui 3 a num3

    return num1 + num2 + num3;
}

console.log("somar2(): " , somar2()); // Chama a função somar2 sem nenhum argumento. Todos os parâmetros serão falsy, então num1, num2 e num3 receberão os valores padrão 1, 2 e 3, respectivamente. O resultado será 6, e o console exibirá "somar2(): 6".

console.log("somar2(5): " , somar2(5)); // Chama a função somar2 com o argumento 5. O parâmetro num1 receberá o valor 5, enquanto num2 e num3 serão falsy e receberão os valores padrão 2 e 3, respectivamente. O resultado será 10, e o console exibirá "somar2(5): 10".   

console.log("somar2(5, 10): " , somar2(5, 10)); // Chama a função somar2 com os argumentos 5 e 10. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 será falsy e receberá o valor padrão 3. O resultado será 18, e o console exibirá "somar2(5, 10): 18".

console.log("somar2(5, 10, 15): " , somar2(5, 10, 15)); // Chama a função somar2 com os argumentos 5, 10 e 15. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 30, e o console exibirá "somar2(5, 10, 15): 30".

console.log("somar2(undefined, 10, 15): " , somar2(undefined, 10, 15)); // Chama a função somar2 com os argumentos undefined, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar2(undefined, 10, 15): 26".

console.log("somar2(null, 10, 15): " , somar2(null, 10, 15)); // Chama a função somar2 com os argumentos null, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar2(null, 10, 15): 26".

console.log("somar2(0, 0, 0): " , somar2(0, 0, 0)); // Chama a função somar2 com os argumentos 0, 0 e 0. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 0, e num3 receberá o valor 0. O resultado será 1, e o console exibirá "somar2(0, 0, 0): 1".

/*gambiarra 2 */

function somar3(num1, num2, num3) {
    num1 = isNaN(num1) ? 1 : num1; // Se num1 não for um número, atribui 1 a num1
    num2 = isNaN(num2) ? 2 : num2; // Se num2 não for um número, atribui 2 a num2
    num3 = isNaN(num3) ? 3 : num3; // Se num3 não for um número, atribui 3 a num3

    return num1 + num2 + num3;
}


console.log("somar3(): " , somar3()); // Chama a função somar3 sem nenhum argumento. Todos os parâmetros serão falsy, então num1, num2 e num3 receberão os valores padrão 1, 2 e 3, respectivamente. O resultado será 6, e o console exibirá "somar3(): 6".

console.log("somar3(5): " , somar3(5)); // Chama a função somar3 com o argumento 5. O parâmetro num1 receberá o valor 5, enquanto num2 e num3 serão falsy e receberão os valores padrão 2 e 3, respectivamente. O resultado será 10, e o console exibirá "somar3(5): 10".   

console.log("somar3(5, 10): " , somar3(5, 10)); // Chama a função somar3 com os argumentos 5 e 10. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 será falsy e receberá o valor padrão 3. O resultado será 18, e o console exibirá "somar3(5, 10): 18".

console.log("somar3(5, 10, 15): " , somar3(5, 10, 15)); // Chama a função somar3 com os argumentos 5, 10 e 15. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 30, e o console exibirá "somar3(5, 10, 15): 30".

console.log("somar3(undefined, 10, 15): " , somar3(undefined, 10, 15)); // Chama a função somar3 com os argumentos undefined, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar3(undefined, 10, 15): 26".

console.log("somar3(null, 10, 15): " , somar3(null, 10, 15)); // Chama a função somar3 com os argumentos null, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar3(null, 10, 15): 26".

console.log("somar3(0, 0, 0): " , somar3(0, 0, 0)); // Chama a função somar3 com os argumentos 0, 0 e 0. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 0, e num3 receberá o valor 0. O resultado será 1, e o console exibirá "somar3(0, 0, 0): 1".


/*Forma atual - recomendada */

function somar4(num1 = 1, num2 = 2, num3 = 3) {
    return num1 + num2 + num3; // Retorna a soma dos três números, utilizando os valores padrão se algum deles for undefined
}

console.log("somar4(): " , somar4()); // Chama a função somar4 sem nenhum argumento. Todos os parâmetros serão falsy, então num1, num2 e num3 receberão os valores padrão 1, 2 e 3, respectivamente. O resultado será 6, e o console exibirá "somar4(): 6".

console.log("somar4(5): " , somar4(5)); // Chama a função somar4 com o argumento 5. O parâmetro num1 receberá o valor 5, enquanto num2 e num3 serão falsy e receberão os valores padrão 2 e 3, respectivamente. O resultado será 10, e o console exibirá "somar4(5): 10".

console.log("somar4(5, 10): " , somar4(5, 10)); // Chama a função somar4 com os argumentos 5 e 10. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 será falsy e receberá o valor padrão 3. O resultado será 18, e o console exibirá "somar4(5, 10): 18".

console.log("somar4(5, 10, 15): " , somar4(5, 10, 15)); // Chama a função somar4 com os argumentos 5, 10 e 15. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 30, e o console exibirá "somar4(5, 10, 15): 30".

console.log("somar4(undefined, 10, 15): " , somar4(undefined, 10, 15)); // Chama a função somar4 com os argumentos undefined, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar4(undefined, 10, 15): 26".

console.log("somar4(null, 10, 15): " , somar4(null, 10, 15)); // Chama a função somar4 com os argumentos null, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar4(null, 10, 15): 26".

console.log("somar4(a, b, c): " , somar4('a', 'b', 'c')); // Chama a função somar4 com os argumentos 'a', 'b' e 'c'. O parâmetro num1 receberá o valor 'a', num2 receberá o valor 'b', e num3 receberá o valor 'c'. O resultado será a concatenação das três strings, e o console exibirá "somar4(a, b, c): abc".

console.log("somar4(true, false, 'c'): " , somar4(true, false, 'c')); // Chama a função somar4 com os argumentos true, false e 'c'. O parâmetro num1 receberá o valor true, num2 receberá o valor false, e num3 receberá o valor 'c'. O resultado será a concatenação das três valores, e o console exibirá "somar4(true, false, 'c'): truefalsec".

console.log("somar4(0, 0, 0): " , somar4(0, 0, 0)); // Chama a função somar4 com os argumentos 0, 0 e 0. O parâmetro num1 receberá o valor 0, num2 receberá o valor 0, e num3 receberá o valor 0. O resultado será 0, e o console exibirá "somar4(0, 0, 0): 0".

console.log("somar4(2, true, false): " , somar4(2, true, false)); // Chama a função somar4 com os argumentos 2, true e false. O parâmetro num1 receberá o valor 2, num2 receberá o valor true, e num3 receberá o valor false. O resultado será a concatenação dos três valores, e o console exibirá "somar4(2, true, false): 2truefalse".

/*
Em JavaScript, 1 é considerado um valor truthy, enquanto 0 é considerado um valor falsy. Isso significa que, em contextos booleanos, 1 será avaliado como verdadeiro e 0 será avaliado como falso. Por exemplo, em uma declaração if, se você usar 1 como condição, o bloco de código dentro do if será executado, enquanto se você usar 0 como condição, o bloco de código não será executado.
Em JavaScript, 1 é considerado true e 0  é considerado false. Isso significa que, em contextos booleanos, 1 será avaliado como verdadeiro e 0 será avaliado como falso. Por exemplo, em uma declaração if, se você usar 1 como condição, o bloco de código dentro do if será executado, enquanto se você usar 0 como condição, o bloco de código não será executado.
*/

/*Forma atual sem erros */

function somar5(num1 = 1, num2 = 2, num3 = 3) {
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)) {
        return num1 + num2 + num3; // Retorna a soma dos três números, utilizando os valores padrão se algum deles for undefined
    } else {
        return "Erro: Todos os parâmetros devem ser números inteiros seguros.";
    }   
}

console.log("somar5(): " , somar5()); // Chama a função somar5 sem nenhum argumento. Todos os parâmetros serão falsy, então num1, num2 e num3 receberão os valores padrão 1, 2 e 3, respectivamente. O resultado será 6, e o console exibirá "somar5(): 6".

console.log("somar5(5): " , somar5(5)); // Chama a função somar5 com o argumento 5. O parâmetro num1 receberá o valor 5, enquanto num2 e num3 serão falsy e receberão os valores padrão 2 e 3, respectivamente. O resultado será 10, e o console exibirá "somar5(5): 10".

console.log("somar5(5, 10): " , somar5(5, 10)); // Chama a função somar5 com os argumentos 5 e 10. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 será falsy e receberá o valor padrão 3. O resultado será 18, e o console exibirá "somar5(5, 10): 18".

console.log("somar5(5, 10, 15): " , somar5(5, 10, 15)); // Chama a função somar5 com os argumentos 5, 10 e 15. O parâmetro num1 receberá o valor 5, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 30, e o console exibirá "somar5(5, 10, 15): 30".

console.log("somar5(undefined, 10, 15): " , somar5(undefined, 10, 15)); // Chama a função somar5 com os argumentos undefined, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar5(undefined, 10, 15): 26".

console.log("somar5(null, 10, 15): " , somar5(null, 10, 15)); // Chama a função somar5 com os argumentos null, 10 e 15. O parâmetro num1 será falsy e receberá o valor padrão 1, num2 receberá o valor 10, e num3 receberá o valor 15. O resultado será 26, e o console exibirá "somar5(null, 10, 15): 26".

console.log("somar5(a, b, c): " , somar5('a', 'b', 'c')); // Chama a função somar5 com os argumentos 'a', 'b' e 'c'. O parâmetro num1 receberá o valor 'a', num2 receberá o valor 'b', e num3 receberá o valor 'c'. O resultado será a concatenação das três strings, e o console exibirá "somar5(a, b, c): abc".

console.log("somar5(true, false, 'c'): " , somar5(true, false, 'c')); // Chama a função somar5 com os argumentos true, false e 'c'. O parâmetro num1 receberá o valor true, num2 receberá o valor false, e num3 receberá o valor 'c'. O resultado será a concatenação das três valores, e o console exibirá "somar5(true, false, 'c'): truefalsec".

console.log("somar5(0, 0, 0): " , somar5(0, 0, 0)); // Chama a função somar5 com os argumentos 0, 0 e 0. O parâmetro num1 receberá o valor 0, num2 receberá o valor 0, e num3 receberá o valor 0. O resultado será 0, e o console exibirá "somar5(0, 0, 0): 0".

console.log("somar5(2, true, false): " , somar5(2, true, false)); // Chama a função somar5 com os argumentos 2, true e false. O parâmetro num1 receberá o valor 2, num2 receberá o valor true, e num3 receberá o valor false. O resultado será a concatenação dos três valores, e o console exibirá "somar5(2, true, false): 2truefalse".
