import { Modal } from './modal.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const showAlertError = notANumber(weight) || notANumber(height)

if(showAlertError){
    console.log("alerta de erro")
    return;
}

form.onsubmit = event => {
    event.preshowAlertErrorventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notANumber(value){
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
