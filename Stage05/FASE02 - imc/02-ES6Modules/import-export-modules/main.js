// EXEMPLO 01
// import "./utils.js"

// EXEMPLO 02
// import message from "./utils.js"


// EXEMPLO 03 e 04
// import {message, text} from "./utils.js"


// EXEMPLO 05
// import { today, double} from "./utils.js"
// console.log(today, double)


// EXEMPLO 06
// import funcaoPadrao, {date, greeting} from "./utils.js"

// console.log(date)
// console.log(greeting('jonas'))
// funcaoPadrao("thiago")


// EXEMPLO 07
// import {sum as soma} from "./utils.js"
// console.log(soma(3, 8))


// EXEMPLO 08
import * as calculator from './utils.js'
console.log(calculator.sum(49, 4))
console.log(calculator.multiply(49, 4))
console.log(calculator.subtract(49, 4))
console.log(calculator.divide(49, 4))