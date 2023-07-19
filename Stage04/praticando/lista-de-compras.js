/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let marketList = []

for(let i = 1; i <= 10; i++){
  let item = prompt(`Informe o ${i}º item`)
  marketList.push(item)
}

alert(marketList.join(', '))