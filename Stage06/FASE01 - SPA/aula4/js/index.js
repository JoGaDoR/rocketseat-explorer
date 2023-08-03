const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}

function route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handlePath()
}

function handlePath(){
    // const pathname = window.location.pathname
    // const { pathname, href, port, host } = window.location
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    console.log(pathname)
    console.log(route)

    fetch(route).then((data) => data.text()).then(html => {
        document.querySelector("#app").innerHTML = html
    })
}

handlePath()

window.onpopstate = () => handlePath()
window.route = () => route()