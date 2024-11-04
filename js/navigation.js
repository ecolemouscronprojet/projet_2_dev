const list = document.getElementById('list');

// const thirdElement = document.querySelector('#list li:nth-child(3)');
// console.log('thirdElement', thirdElement)

// exercice 1 à partir de la liste récupérer l'element suivant
// en naviguant dans le DOM
// <li>Pomme TEST2</li>

const firstLi = list.firstElementChild
const firstOl = firstLi.firstElementChild

const secondApple = firstOl.children[1];

// Depuis secondApple naviguer au plus haut ul parent et selectionner le dernier li qui est
// Citron

console.log('secondApple', secondApple)
//  const firstParent = secondApple.parentElement;
//  const secondParent = firstParent.parentElement;
//  const thirdParent = secondParent.parentElement;

const parent =  secondApple.closest('#list');
const citron = parent.lastElementChild;

console.log('citron', citron)




// console.log("Element pomme TEST2", list.firstElementChild.children[1]);
