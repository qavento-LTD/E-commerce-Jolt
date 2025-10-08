const toolbar = document.querySelector('.toolbar');
const logo = toolbar.querySelector('a');
const svgs = document.querySelectorAll('svg');

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    toolbar.style.background = 'white';
    toolbar.style.boxShadow = '0 0 10px #A5A5A5';
    logo.style.color = 'black';
    svgs.forEach(svg => svg.style.color = 'black');
  } else {
    toolbar.style.background = 'none';
    toolbar.style.boxShadow = 'none'
    logo.style.color = 'white';
    svgs.forEach(svg => svg.style.color = 'white');
  }
});