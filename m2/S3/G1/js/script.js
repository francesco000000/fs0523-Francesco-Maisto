class User{
    constructor(n,c,e,l,){
        this.firstName= n;
        this.lasttName= c;
        this.age= e;
        this.locatio= l;
        
    }
   confrontaEta(y){
    if (this.age > y.age) {
        return `${this.firstName} è più vecchio`
    }else{
        return `${y.firstName} è più giovane `
    }
   }
    }
    
    let utenteX = new User("Gino","Pagano",3,"Caserta");
    let utenteY = new User("Salvatore","Speranza",28,"Milano");
    console.log(utenteY.confrontaEta(utenteX));


   class Pet{
    constructor(n,o,s,b){
         this.petName= n;
         this.ownerName= o;
         this.species= s;
         this.breed= b;
    }
   }
   