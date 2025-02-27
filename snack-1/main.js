//Ottieni il titolo di un post con una Promise.
//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise 
//che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    });
    return promessa
}

getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))

getPostTitle(2)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))