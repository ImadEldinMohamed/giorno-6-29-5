/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
  
  let armadio =' bianco'
  console.log('stringa:è una parola o frase rinchiusa in 2 segni chiamate apici o virgolette.',armadio)
  let scatola = null
  console.log ('quando la tua scatola è vuota perche non ci hai messo niente',scatola)
  let cioccolato
  console.log('in questo caso non hai definito che tipo di cioccolato hai se al latte,fondente ecc',cioccolato)

   let eta =10
   console.log('numeri: i numeri come 10 che rappresentano letà o numeri che usate per fare le addizioni a scuola.',eta)
   let VotoEsame= 7
   let SuperamentoEsame= VotoEsame>=6
   console.log( 'boolean:come quando a scuola per superare una verifica devi prendere almeno 6,se il voto è >=6 e vero che lhai superato,se è < di 6 è falso che lo hai superato',SuperamentoEsame)
   

   



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let nome = 'imad';
console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
  
/* SCRIVI QUI LA TUA RISPOSTA */
  let numero1 = 12
  let numero2 = 20
  let somma = numero1 + numero2
  console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
   
   
/* SCRIVI QUI LA TUA RISPOSTA */
nome = 'mohamed';
console.log(nome);

const ColoreCapelli = 'nero';

console.log(ColoreCapelli);

 //  ColoreCapelli = 'bianco';
 // console.log(ColoreCapelli); // errore perche è una costante ,quindi non posso cambiare 'nero' e mettere 'bianco'


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione= x-4
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome1 = 'john'
let nome2 = 'John'
 
let nome3 = nome1===nome2 
console.log(nome3)

console.log(nome2.toLowerCase())
nome3=nome1===nome2.toLowerCase()
console.log(nome3)

