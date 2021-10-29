window.onload = (event) => {

  const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const currentTheme = document.querySelector("#theme-link");
const btnTheme = document.querySelector("#btn-theme");

// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// if (prefersDarkScheme.matches) {
//   setTheme('css/light-theme.css');
// } else {
//   setTheme('css/dark-theme.css');
// }

document.getElementById('btn-theme').addEventListener('click', function(){
  setTheme(currentTheme.getAttribute("href"));
});

function setTheme(theme){

  animateCSS('#btn-theme', 'flipInX');

  if(theme === 'css/light-theme.css'){
    currentTheme.href = 'css/dark-theme.css';
    btnTheme.classList.add('fa-sun');
    btnTheme.classList.remove('fa-moon');
  }
  else{
    currentTheme.href = 'css/light-theme.css';
    btnTheme.classList.add('fa-moon');
    btnTheme.classList.remove('fa-sun');
  }
};
}