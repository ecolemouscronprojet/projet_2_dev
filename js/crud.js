let listIndex = 1;
let currentIndex;

function save(event) {
    const buttonSave = document.getElementById('buttonSave')
    const buttonSaveValue = buttonSave.value
    // Prevent the form from submitting
    event.preventDefault()
    // Get the form
    const todoField = document.querySelector('#todoField')
    // Get the value of the input
    const value = todoField.value
    
    // Check if the input is empty
    if(value.length === 0) {
        alert('Veuillez saisir une tâche')
        return;
    }
    
    // Get the list
    const list = document.querySelector('#list')
    
    // CREATION
    if(buttonSaveValue === 'Ajouter') {
        // Create a new list item
        const newItem = document.createElement('li')
        newItem.setAttribute('data-id',listIndex)    
        newItem.setAttribute('class', 'list-group-item')    
        // Set the text content of the new item
        newItem.innerHTML = `
        <span>${value}</span> <button class="btn btn-danger btn-sm" onclick="remove(this)">Supprimer</button>
        <button class="btn btn-primary" onclick="edit(this, ${listIndex})">Modifier</button>
        `    
        listIndex++
        // Add the new item to the list
        list.appendChild(newItem);
    } else { // MODIFICATION   
        // currentIndex
        const li = document.querySelector(`li[data-id="${currentIndex}"]`)
        const _span = li.firstElementChild;
        _span.innerHTML = value
        
        const buttonSave = document.querySelector('#buttonSave')
        buttonSave.value = "Ajouter"
    }

    // Focus
    todoField.focus()
    todoField.value = ''
}

function edit(element, index) {
    const elementParent  = element.closest('li');
    const elementTodo = elementParent.firstElementChild;
    const valeur = elementTodo.innerHTML
    
    const todoField = document.querySelector('#todoField')
    todoField.value = valeur
    todoField.focus()

    const buttonSave = document.querySelector('#buttonSave')
    buttonSave.value = "Modifier"
    currentIndex = index
}


function remove(element) {
    element.closest('li').remove()
}
