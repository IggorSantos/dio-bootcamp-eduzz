/*Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos.
 Em seguida, apresente a quantidade de valores positivos digitados.*/
 valoresPositivos = 0
for(let i = 0;i<6;i++){
  num = gets()
  if(num>=0){
    valoresPositivos++
  }
}

console.log(valoresPositivos + " valores positivos");
