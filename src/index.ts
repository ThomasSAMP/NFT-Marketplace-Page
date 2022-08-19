var ticking;
const navbar = document.querySelector("nav");

window.addEventListener('scroll', function(e) {
    const $lastpos = window.scrollY;
    
    if ($lastpos>70) {
        navbar.style.backgroundColor = '#1e2222';
        navbar.style.height = '64px';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.height = '100px';
    }
  });