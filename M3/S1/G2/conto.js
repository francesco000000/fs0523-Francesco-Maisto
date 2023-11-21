"use strict";
class MotherAccount {
    constructor(_balanceInt) {
        this.balaceInt = 0;
        this.balaceInt = _balanceInt;
    }
    deposit(n) {
        this.balaceInt += n;
        return this.balaceInt;
    }
    whitDrow(n) {
        this.balaceInt -= n;
        return this.balaceInt;
    }
    addInterest() {
        this.balaceInt *= 1.1;
    }
}
class SonAccount extends MotherAccount {
    constructor(_balanceInt = 0) {
        super(_balanceInt);
    }
}
let madre = new MotherAccount(100);
let son = new SonAccount(200);
madre.addInterest();
console.log(madre.balaceInt);
console.log(son.balaceInt);
//# sourceMappingURL=conto.js.map