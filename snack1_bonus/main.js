//Bonus: Ottieni l'intero post con l'autore
//Crea una funzione getPost(id) che recupera l'intero post. 
//Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, 
//recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

const getPost = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(res => res.json())
                    .then(user => {
                        post.user = user;
                        resolve(post)
                    })
                    .catch(reject)
            })
            .catch(reject)
    })
}

getPost(1)
    .then(post => console.log(post))
    .catch(error => console.error(error))