const app = {
    users: []
}

app.fetchUsers = async () => {
    const response = await fetch('/data/users.json');
    const users = await response.json()
    app.users = users
    return users;
}

app.display = () => {
    if (app.users.length == 0) {
        return;
    }
    const list = document.querySelector('#user-list')
    //empty list
    list.innerHTML = "";
    if (list) {
        for (let user of app.users) {
            list.innerHTML += `<li>${user.index} : ${user.name}</li>`;
        }
    }
}

//BOOTSTRAP APP
(async function () {

    // récupérer les utilisateurs
    await app.fetchUsers()

    // AFFICHER LES UTILISATEURS
    app.display()
    
}())