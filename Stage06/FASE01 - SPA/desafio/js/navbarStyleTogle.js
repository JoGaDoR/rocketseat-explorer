export const navLinks = document.querySelectorAll("#navbar .nav-link");
export function setActiveLink(event){
    navLinks.forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
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