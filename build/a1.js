"use strict";
alert("Digite os valores do triangulo");
let lado1 = Number(prompt("Valor 1:"));
let lado2 = Number(prompt("Valor 2:"));
let lado3 = Number(prompt("Valor 3:"));
if (lado1 == lado2 && lado3 == lado2 && lado1 == lado3) {
    document.write("Equilátero!");
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    document.write("Isósceles!");
}
else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    document.write("Escaleno!");
}
else {
    document.write("Valores invalidos 🤨");
}
// O triângulo equilátero possui todos os lados congruentes, isto é, todos os lados do triângulo possuem a mesma medida.
// O triângulo isósceles possui pelo menos dois lados congruentes, ou seja, possui dois lados iguais e um diferente.
// O triângulo escaleno possui todos os seus lados diferentes, ou seja, cada lado tem uma medida diferente.
