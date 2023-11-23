"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoAbbigliamento {
    constructor(_id, _codprod, _collezion, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoincluso, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezion = _collezion;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoincluso;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getsaldocapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
function call(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch(url);
        let data = yield res.json();
        data.forEach(element => {
        });
        return data;
    });
}
call('Abbigliamento.json').then(console.log);
//# sourceMappingURL=script.js.map