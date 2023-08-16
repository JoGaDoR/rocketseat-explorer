  // import { router } from "./index.js"
  
  // Obtém todos os links de navegação e retorna um array
  const navLinks = document.querySelectorAll('.nav-link');

  // função para adicionar e remover class de estilo a tag link do navbar
  export function setActiveLinkClass() {
    const pathName = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === pathName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }


  // function setActiveClass(){
  //   const currentURL = window.location.pathname
  //   navLinks.forEach(link => {
  //       const href = link.getAttribute("href")
  //       const isActive = currentURL === href || router.routes[currentURL] === href
        
  //       if(href === "/" && currentURL !== "/"){
  //         link.classList.remove("active")
  //       }else{
  //         link.classList.toggle("active", isActive)
  //       }
  //   })
  // }

    // Chama a função ao carregar a página e quando o hash muda
  // window.addEventListener('load', setActiveLinkClass);
  // window.addEventListener('hashchange', setActiveLinkClass);