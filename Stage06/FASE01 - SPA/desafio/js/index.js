import {Router} from "./router.js"
import { setActiveLinkClass } from "./navbarStyleTogle.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handlePath()

window.onpopstate = () => router.handlePath()
window.route = () => router.route()

setActiveLinkClass()

export { router }