// Selectionner le button
const btn2 = document.querySelector('#btn');
const carreBis = document.querySelector('#carre')

const colors = ['green', 'blue', 'red', 'yellow', 'orange'];
let index = 0;

btn2.addEventListener('click', function() {
    carreBis.style.backgroundColor = colors[index];
    index = colors[++index] ? index : 0;
});