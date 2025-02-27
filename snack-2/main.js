//Crea la funzione lanciaDado() che restituisce una Promise che,
//dopo 3 secondi, genera un numero casuale tra 1 e 6. 
//Tuttavia, nel 20% dei casi,il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const incastro = Math.random() < 0.2;

            if (incastro) {
                reject('errore il dado si è incastrato!');
            } else {
                const dado = Math.floor(Math.random() * 6) + 1;
                resolve(`il numero uscito dal dado è: ${dado}`);
            }
        }, 3000);
    })
}

lanciaDado()
    .then(messaggio => console.log(messaggio))
    .catch(error => console.log(error))