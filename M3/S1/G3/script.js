"use strict";
class TasseLavoroAutonomo {
    constructor(_codredd, _ral, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditonnuolordo = _ral;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
}
class CalcoloTasse extends TasseLavoroAutonomo {
    constructor(codredd, ral, tasseinps, tasseirpef) {
        super(codredd, ral, tasseinps, tasseirpef);
        this.codredd = codredd;
        this.ral = ral;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getUtileTasse() {
        return this.ral * this.codredd;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseinps;
    }
    getTasseIrpef() {
        let n = this.getUtileTasse() - this.getTasseInps();
        return n * this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }
}
let lavoratore1 = new CalcoloTasse(0.78, 2000, 0.26, 0.23);
lavoratore1.getUtileTasse();
lavoratore1.getTasseInps();
console.log(lavoratore1.getTasseIrpef());
lavoratore1.getRedditoAnnuoNetto();
//# sourceMappingURL=script.js.map