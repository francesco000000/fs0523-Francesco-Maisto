/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{ 
let namb1 = 10;
let namb2 = 20;
if(namb1>namb2){
  console.log("il numero maggiore è " + namb1);
}else{
  console.log("il numero maggiore è " + namb2);
}
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  */
  { 
let namb = 10;

if(namb != 5){
  console.log("not equal");
}
 }
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
{
let namb = 50;

if (namb % 5 == 0 || namb % 5 == 5) {
  console.log("divisibile per 5");
}else{
  console.log("non è divisibile");
}
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
{
  let namb1 = 4;
  let namb2 = 8;
  if(namb1 == 8 || namb2 == 8){
    console.log("vero");
  }else if(namb1+namb2 == 8 || namb1-namb2 == 8){
    console.log("vero");
  }else{
    console.log("falso");
  }
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function checkout (totalShoppingCart) {
  if(totalShoppingCart>50){
    console.log("Totale carello:"+ totalShoppingCart+" "+",hai diritto alla spedizione gratuita");
  }else if (totalShoppingCart<=50){
    console.log("totale carello:"+ (totalShoppingCart+10));
  }
}
checkout(100);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
function checkout2 (totalShoppingCart) {
  let sconto = totalShoppingCart*20/100;
  let prezzoFinale = totalShoppingCart-sconto;
  if(prezzoFinale - sconto>50){
    console.log("Totale carello:"+ prezzoFinale+" "+",hai diritto alla spedizione gratuita");
  }else if (prezzoFinale - sconto <=50){
    console.log("totale carello:"+ (prezzoFinale+10));
  }
}
checkout2(30);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let namb1 = 10;
let namb2 = 20;
let namb3 = 30;
if (namb1 > namb2 && namb1 > namb3 && namb2>namb3) {
  console.log(namb1 + " " + namb2 + " " + namb3);
}else if (namb2 > namb1 && namb2 > namb3 && namb1>namb3) {
  console.log(namb2 + " " + namb1 + " " + namb3);
}else if (namb3 > namb1 && namb3 > namb2 && namb1>namb2) {
  console.log(namb3 + " " + namb1 + " " + namb2);
}else if (namb3 > namb1 && namb3 > namb2 && namb2>namb1) {
  console.log(namb3 + " " + namb2 + " " + namb1);
}
  
  


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verificaNumero(namb) {
  if (typeof namb == "number") {
    console.log("è un numero");
  }else{
    console.log("non è un numero");
  }
}
verificaNumero(10);



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function pariDispari(namb) {
  if(namb % 2 == 0){
    console.log("il numero è pari");
  }else{
    console.log("il numero è dispari");
  }
}
pariDispari(11);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 10) {
      console.log(val + " "+ " è minore di 10");
    } else if (val < 5) {
      console.log(val + " " + "è maggiore di 5");
    } else if(val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];
array.push(1,2,3,4,5,6,7,8,9,10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[9] = 100;
console.log(array);

