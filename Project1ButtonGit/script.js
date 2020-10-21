const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red','green','blue','yellow','pink','orange'];

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length);
   body.style.backgroundColor = colors[colorIndex]
   button.style.backgroundColor = colors[colorIndex]
}

button.addEventListener('click', changeBackground);




