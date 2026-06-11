/* ######################## Entendendo e usando as Arrow Functions ######################## */

// Forma 1

function somar1(num1, num2) {
    return num1 + num2;
}

console.log(somar1(4, 6));

// Forma 2

let somar2 = function(num1, num2) {
    return num1 + num2;
}
console.log(somar2(4, 7));

// Forma 3

let somar3 = somar1;
console.log(somar3(4, 8));

// Forma 4 - Arrow Function

let somar4 = (num1, num2) => {
    return num1 + num2;
}
console.log(somar4(4, 9));

/*
Atenção:

Caso a sua função tenha apenas um parâmetro, você pode omitir os parênteses. Exemplo:

let dobrar = num => {
    return num * 2;
}
console.log(dobrar(5));
*/

let dobrar = num => num * 2;
console.log(dobrar(5));

function dizerOla() {
    console.log("Olá!");
}
dizerOla();

const msg = () => console.log("Olá!");
msg();