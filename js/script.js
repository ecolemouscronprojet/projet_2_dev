
// Selection via les tags
const h1Tags = document.getElementsByTagName('h1')

for (let i=0; i<h1Tags.length; i++) {
    if(i%2 === 0) {
        h1Tags[i].style.color = 'red';
    } else {
        h1Tags[i].style.color = 'blue';
    }
}

// Selection via l'id
const btn = document.getElementById('btn');

if (btn) {
    btn.innerText="Check"
}


// Selection via les classes
const h2Class = document.getElementsByClassName('test1')

for (let h2 of h2Class) {
    h2.textContent = 'Hello World';
}


// Selection via les classes



const carre = document.querySelector('#carre')
if (carre) {
    // setTimeout(() => {
        carre.style.backgroundColor = 'red';
        carre.style.height = '100px';
        carre.style.width = '100px';
    // }, 5000)
}

