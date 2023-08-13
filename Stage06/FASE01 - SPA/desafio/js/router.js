import {htmlStyelClassTogle} from "./htmlStyleClassTogle.js"
import {navLinks, setActiveLink} from "./navbarStyleTogle.js"

export class Router{
    routes = []

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handlePath()
    }

    handlePath(){
        const { pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then((data) => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
            htmlStyelClassTogle(pathname)
        })
    }

    activeLink(){
        navLinks.forEach(link => {
            link.addEventListener("click", setActiveLink)
        })
    }
}