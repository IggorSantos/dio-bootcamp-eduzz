/*Desafio
Faça a leitura de um valor inteiro.
Em seguida, calcule o menor número de notas possíveis (cédulas)
onde o valor pode ser decomposto. As notas que você deve considerar
são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido
e a relação de notas necessárias.*/

let valor = parseInt(gets());
let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0
let notas5 = 0
let notas2 = 0
let notas1 = 0

console.log(valor)
while( valor>=100){
  notas100++
  valor = valor - 100
}
while( valor>=50){
  notas50++
  valor = valor - 50
}
while( valor>=20){
  notas20++
  valor = valor - 20
}
while( valor>=10){
  notas10++
  valor = valor - 10
}
while( valor>=5){
  notas5++
  valor = valor - 5
}
while( valor>=2){
  notas2++
  valor = valor - 2
}
while( valor>=1){
  notas1++
  valor = valor - 1
}
console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");
