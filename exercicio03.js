//3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe
//o valor da taxa do garçom (10%) e o valor total a ser pago.

let valortotaljantar = 60
const valortaxa = 10
let valortaxaapagar = ((valortotaljantar) * (valortaxa/100))
let valorfinalconta = valortotaljantar+valortaxaapagar

console.log("Valor a pagar taxa de serviço: " + "R$" + valortaxaapagar)
console.log(" ")
console.log("Valor total da conta: " + "R$" + valorfinalconta)
