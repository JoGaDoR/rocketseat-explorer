import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning(){
    // state.isRunning = !state.isRunning
    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countdonw()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove("running")
}

export function set(){

}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle("music-on")
}