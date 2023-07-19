// 1 declare uma variavel de nome weight
let weight

// 2 que tipo de dadp é a variavel acima?
// R= undefined
console.log(typeof weight)

/* 3 declare um variavel e atribua valores 
      para cada um dos dados
    *name: String
    *age: Number(interger)
    *stars: Number(float)
    *isSubscribed: Bolean
*/

const pessoa = {
    name: "Fulano",
    age: 30,
    stars: 4.5,
    isSubscribed: true
}

let name = "Brazuka"
let age = 520
let stars = 2.0
let isSubscribed = false

console.log(pessoa)
console.log(name, age, stars, isSubscribed)

/*
    4 a variavel stunde abaixo é de que tipo de dados?
    4.1 atribua a ela as mesmas propriedades e valores do exercicio 3
    4.2 mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg
*/

let student = {}
console.log(typeof student)

student = {
    name: "Brazuka",
    age: 520,
    weight: 74.8,
    isSubscribed: false
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)