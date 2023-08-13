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

function applyActiveClassToCurrentPage() {
    const pathName = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === pathName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }