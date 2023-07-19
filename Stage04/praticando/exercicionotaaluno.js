/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let name = prompt("Informe o nome do aluno")
let notasAluno = []
let sum = 0;
let media = 0

for(let i = 1; i <= 3; i++){
    let nota = Number(prompt(`informe a nota do ${i}ª bimestre`))
    notasAluno.push(nota)
}

for(let nota of notasAluno){
    sum += nota
}

media = sum / notasAluno.length

if(media < 6){
    alert(`A média de ${name} foi ${media} e esta de recuperação`)
}else if (media > 6) {
    alert(`A media de ${name} foi ${media} e passou de ano`)
}else{
    alert("Algo deu errado")
}