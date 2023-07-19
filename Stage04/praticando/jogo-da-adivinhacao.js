/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

// EXEMPLO 01

// let userAnswer = Number(prompt("Adivinhe o numero que estou pensando? Entre 0 e 10"))

// let breakPoint = 0;

// while(breakPoint !== 1){
//     let randomNumber = Math.round(Math.random() * 11)
//     let userAnswer = Number(prompt("Adivinhe o numero que estou pensando? Entre 0 e 10"))
//     let count = 1;
//     if (userAnswer === randomNumber){
//         alert(`Parabéns! Você advinhou o número em ${count} tentativas`)
//         breakPoint = 1
//         break
//     }else if(userAnswer !== randomNumber){
//         alert(`Erro, tente novamente: numero do computador ${randomNumber}`)
//         breakPoint = 1
//         continue
//     }else{
//         alert("algo deu errado")
//         breakPoint = 1
//     }
// }


// EXEMPLO 02

let result = Number(prompt("Adivinhe o numero que estou pensando? Entre 0 e 10"))
const randomNumber = Math.round(Math.random() * 10 )
let xAttempts = 0

while(result == randomNumber){
    result = prompt('erro, tente novamente')
    xAttempts++

}

alert(`Parabens! Você adivinhou o numeroem ${xAttempts} tentativas`)