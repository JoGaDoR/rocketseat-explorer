// EXEMPLO 01
// const message = "mensagem"
// console.log(message)


// EXEMPLO 02
// const message = "mensagem"
// export default message


// EXEMPLO 03
// const message = "mensagem"
// const text = "qualquer coisa"
// export {message, text}

// EXEMPLO 04
// export const message = "mensagem"
// export const text = "qualquer coisa"


// EXEMPLO 05
// export const today = Date.now()

// const double = number => number * 2
// export {double}

// // ou poder exportar varios ao mesmo tempo
// export { today, double}


// EXEMPLO 06
// const date = new Date()
// const greeting = name => `Hello ${name}`

// export default function (argument){
//     console.log(date, greeting(argument))
// }

// export {date, greeting}



// EXEMPLO 07
// export function sum(a, b){
//     return a + b
// }

// EXEMPLO 08
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b

// ou 
export { sum, multiply, subtract, divide }