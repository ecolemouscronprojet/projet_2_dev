const app = {
    urlApi: 'https://tyradex.tech/api/v1',
    users: [],
    pokemons: []
}

app.getAllPokemon = async () => {
    const response = await fetch(`${app.urlApi}/pokemon`);
    const pokemons = await response.json()
    app.pokemons = pokemons

    return pokemons;
}

app.fetchUsers = async () => {
    const response = await fetch('/data/users.json');
    const users = await response.json()
    app.users = users
    return users;
}


app.displayPokemon = () => {
    if (app.pokemons.length == 0) {
        return;
    }

    const list = document.querySelector('#pokemons-list')
    //empty list
    list.innerHTML = "";
    let content = ""
    if (list) {
        for (let pokemon of app.pokemons) {
            content += `<li>
            ${pokemon.pokedex_id} : ${pokemon.name.fr}
               <br>
                <img src="${pokemon.sprites.regular}"
            </li>`;
        }
        list.innerHTML = content
    }
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
            list.innerHTML += `<li>$${user.index} : ${user.name}</li>`;
        }
    }
}

//BOOTSTRAP APP
(async function () {

    // récupérer les utilisateurs
    // await app.fetchUsers()

    // AFFICHER LES UTILISATEURS
    // app.display()

    //  récupérer les pokemons
    await app.getAllPokemon()

    // AFFICHER LES POKEMONS
    app.displayPokemon()

}())