const button = document.querySelector('button');
const body = document.querySelector('body');

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
        body.style.backgroundColor = color;
        document.querySelector('H2').innerHTML = color;
    }
    return color;
}
button.addEventListener('click', randomColor);

