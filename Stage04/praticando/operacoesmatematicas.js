/**
 * Capturar 2 numeros
 * e fazer as operações matematicas
 * de soma, subtração, multiplicação
 * divisao e resto da divisao
 * 
 * e para cada operação, mostrar um 
 * alerta com o resultado
 */

let numberOne = Number(prompt("Informe o primeiro numero"))
let numberTwo = Number(prompt("Informe o segundo numero"))
const sum = numberOne + numberTwo
const subtract = numberOne - numberTwo
const multiplie = numberOne * numberTwo
const division = numberOne / numberTwo
const restDivision = numberOne % numberTwo

alert(`A soma é ${sum}`)
alert(`A subtração é ${subtract}`)
alert(`A multiplicação é ${multiplie}`)
alert(`A divisão é ${division}`)
alert(`O resto da divisão é ${restDivision}`)