/**
 
Nesse desafio, você irá solicitar ao usuário que ele insira 
**dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

 */

let userAnswer = []
for(let i = 1; i < 3; i++){
    userAnswer.push(Number(prompt(`Insira o º${i} numero: `)))
}

const soma = userAnswer[0] + userAnswer[1]
const subt = userAnswer[0] - userAnswer[1]
const multi = userAnswer[0] * userAnswer[1]
const divi = (userAnswer[0] / userAnswer[1]).toFixed(2)
const resto = (userAnswer[0] % userAnswer[1]).toFixed(2)

alert(`A soma é: ${soma}`)
alert(`A subtração é: ${subt}`)
alert(`A multiplicação é: ${multi}`)
alert(`A divisão é: ${divi}`)
alert(`A o resto da divisão é: ${resto}`)

if(soma % 2 === 0){
    alert(`O numero ${soma} é par`)
}else{
    alert(`O numero ${soma} é impar`)
}

if(userAnswer[0] === userAnswer[1]){
    alert("Os numeros inseridos são iguais")
}else{
    alert("Os numeros inseridos são diferentes")
}