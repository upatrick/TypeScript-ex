"use strict";
let num = Number(prompt("Digite um numero de 1 a 7"));
if (num == 1) {
    document.write("domingo");
}
else if (num == 2) {
    document.write("segunda");
}
else if (num == 3) {
    document.write("terça");
}
else if (num == 4) {
    document.write("quarta");
}
else if (num == 5) {
    document.write("quinta");
}
else if (num == 6) {
    document.write("sexta");
}
else if (num == 7) {
    document.write("sabado");
}
if (num > 7) {
    document.write("eita!");
}
// 8. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número
// de 1 a 7 e imprimir no console o dia da Semana. Para este exercício
// assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante.
// Caso o número recebido não esteja neste intervalo imprimir “Dia não
// reconhecido”.
