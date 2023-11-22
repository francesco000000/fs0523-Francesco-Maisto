abstract class TasseLavoroAutonomo {
    codredd:number
    redditonnuolordo:number
    tasseinps:number
    tasseirpef:number
    constructor(_codredd:number,_ral:number,_tasseinps:number,_tasseirpef:number) {
       this.codredd=_codredd
       this.redditonnuolordo=_ral
       this.tasseinps = _tasseinps
       this.tasseirpef = _tasseirpef
    }
    abstract getUtileTasse ():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto():number
    abstract      getTasseInps():number

            }

 class CalcoloTasse extends TasseLavoroAutonomo{
    constructor(public codredd:number,public ral:number,public tasseinps:number,public tasseirpef:number){
        super(codredd,ral,tasseinps,tasseirpef) 
    }
     getUtileTasse ():number{
       return this.ral*this.codredd
    }
     getTasseInps():number{
       return this.getUtileTasse()*this.tasseinps
     }
     getTasseIrpef():number{
      let n = this.getUtileTasse()-this.getTasseInps()
      return n * this.tasseirpef
     }
     getRedditoAnnuoNetto():number{
        return this.getUtileTasse()-this.getTasseInps()-this.getTasseIrpef()
     }
 }
    
 
let lavoratore1 = new CalcoloTasse(0.78,2000,0.26,0.23)
lavoratore1.getUtileTasse();
lavoratore1.getTasseInps();
console.log(lavoratore1.getTasseIrpef() );

lavoratore1.getRedditoAnnuoNetto() 


