"use strict";
let giocatore1 = 80;
let giocatore2 = 70;
let numGenerato = Math.floor(Math.random() * 101);
let dif1 = giocatore1 - numGenerato;
let dif2 = giocatore2 - numGenerato;
if (numGenerato == giocatore1) {
    console.log(`${giocatore1} e uguale a  ${numGenerato}`);
}
else if (numGenerato == giocatore2) {
    console.log(`${giocatore2} e uguale a  ${numGenerato}`);
}
else if (giocatore1 != numGenerato && giocatore2 != numGenerato && dif1 < dif2) {
    console.log(`${giocatore1} si avvicina  ${numGenerato}`);
}
else if (giocatore1 != numGenerato && giocatore2 != numGenerato && dif2 < dif1) {
    console.log(`${giocatore2} si avvicina  ${numGenerato}`);
}
let g1 = document.querySelector('#giocatore1');
let g2 = document.querySelector('#giocatore2');
let btn = document.querySelector('#btn');
let span = document.querySelector('.numeroGenerato');
