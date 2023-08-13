export function htmlStyelClassTogle(pathname){
    let divApp = document.getElementById("app")

    switch (pathname){
        case "/":
            divApp.classList.toggle("home-css")
            break
        case "/universe":
            divApp.classList.toggle("universe-css")
            break
        case "/exploration":
            divApp.classList.toggle("exploration-css")
            break
        default:
            divApp.classList.toggle("error-404-css")
    }

}