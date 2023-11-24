"use strict";
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuti) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuti = costoMinuti;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Il tuo credito residuo è ${this.carica} £`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min = 1) {
        let costo = this.costoMinuti *= min;
        this.carica -= costo;
        this.numeroChiamate++;
    }
    azzeraChiamata() {
        this.numeroChiamate = 0;
    }
}
let sim1 = new Smartphone(10, 5, 1);
sim1.ricarica(10);
sim1.numero404();
sim1.getNumeroChiamate();
sim1.chiamata(2);
sim1.azzeraChiamata();
console.log(sim1.carica);
console.log(sim1.costoMinuti);
console.log(sim1.numeroChiamate);
let sim2 = new Smartphone(25, 9, 0.50);
sim2.ricarica(50);
sim2.numero404();
sim2.getNumeroChiamate();
sim2.chiamata(5);
sim2.azzeraChiamata();
console.log(sim2.carica);
console.log(sim2.costoMinuti);
console.log(sim2.numeroChiamate);
let sim3 = new Smartphone(30, 10, 0.20);
sim3.ricarica(10);
sim3.numero404();
sim3.getNumeroChiamate();
sim3.chiamata(8);
sim3.azzeraChiamata();
console.log(sim3.carica);
console.log(sim3.costoMinuti);
console.log(sim3.numeroChiamate);
