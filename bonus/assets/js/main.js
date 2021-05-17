/* 
Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

let yoda = new Vue(
    {
        el: "#root",
        data: {
            message: "Say hello to Baby Yoda",
            image: "./assets/images/baby-yoda-the-mandalorian-2.jpg",
        }

    }
)