const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector(".btnOpen")
const btnAgain = document.querySelector(".btnAgain")

btnOpen.addEventListener("click", () => {
    changeScreenHideClass()
})
btnAgain.addEventListener("click", () => {
    changeScreenHideClass()
})

function changeScreenHideClass(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}