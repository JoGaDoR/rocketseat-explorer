
//function expression
// function anonymous
//parameters (number1, number2)
const sum = function(number1, number2){
    console.log(number1 + number2)
}

sum(2, 3) // passando arguments


/*

    diferença de PARAMETRO E ARGUMENTO

    parametro é quando se refere dentro da função criada
        const sum = function(number1, number2){
        }


    argumento é quando se refere dentro da função executada
        sum(2, 3) // passando arguments
*/


let fruit = "banana"
function getFruit(fruit){
    fruit = "orange"
    return fruit
}

console.log(fruit)
console.log(getFruit(fruit))