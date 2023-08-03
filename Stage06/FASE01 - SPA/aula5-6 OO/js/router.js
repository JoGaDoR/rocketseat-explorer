export class Router {
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
        // const pathname = window.location.pathname
        // const { pathname, href, port, host } = window.location
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        console.log(pathname)
        console.log(route)
    
        fetch(route).then((data) => data.text()).then(html => {
            document.querySelector("#app").innerHTML = html
        })
    }
}