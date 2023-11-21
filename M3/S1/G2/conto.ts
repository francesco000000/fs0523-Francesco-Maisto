class MotherAccount {
    balaceInt:number=0
    constructor(_balanceInt:number) {
        this.balaceInt = _balanceInt
        
    }
    deposit(n:number):number{
       this.balaceInt+=n
       return this.balaceInt
    }
    whitDrow(n:number):number{
        this.balaceInt -= n
        return this.balaceInt
    }
   addInterest():void{
       this.balaceInt*=1.1
    
     
       
    }
}

class SonAccount extends MotherAccount {
   constructor(_balanceInt:number=0){
    super(_balanceInt)
   }
}


let madre = new MotherAccount(100)
let son = new SonAccount(200)
madre.addInterest()
console.log(madre.balaceInt);
console.log(son.balaceInt);
