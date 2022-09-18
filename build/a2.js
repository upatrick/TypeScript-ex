"use strict";
let votosTotal = 99;
let votosB = 20;
let votosN = 20;
let votosV = 60;
if (votosB + votosN + votosV > votosTotal) {
    console.log("eita");
}
else {
    votosB = votosB * votosTotal / 100;
    votosN = votosN * votosTotal / 100;
    votosV = votosV * votosTotal / 100;
    console.log(votosB);
    console.log(votosN);
    console.log(votosV);
}
// 2. Escreva um algoritmo que armazene o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores. O
// algoritmo deve fazer uma validação para que as porcentagens dos votos
// armazenados (brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
// válidos não seja maior que o número total de eleitores.
