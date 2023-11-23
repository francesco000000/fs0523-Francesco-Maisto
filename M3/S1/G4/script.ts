class CapoAbbigliamento{
    id: number
    codprod:number
    collezion:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa: number
    disponibile:string
    saldo:number
    constructor(_id:number,
        _codprod:number,
        _collezion:string,
        _capo:string,
        _modello:number,
        _quantita:number,
        _colore:string,
        _prezzoivaesclusa:number,
        _prezzoincluso:number,
        _disponibile:string,
        _saldo:number
       
        ){
            this.id=_id
            this.codprod=_codprod
            this.collezion=_collezion
            this.capo=_capo
            this.modello=_modello
            this.quantita=_quantita
            this.colore=_colore
            this.prezzoivaesclusa=_prezzoivaesclusa
            this.prezzoivainclusa=_prezzoincluso
            this.disponibile= _disponibile
            this.saldo=_saldo

        }
        getsaldocapo():number{
         return this.prezzoivainclusa*this.saldo/100
            
        }
        getacquistocapo():number{
            return this.prezzoivainclusa- this.getsaldocapo()
        }
   
}


async function call(url:string):Promise<CapoAbbigliamento[]>{
    let res:Response = await fetch(url);
    let data:CapoAbbigliamento[] = await res.json()
   data.forEach(element => {
    
     
      
   });
        
      
        
    
    
    return data
    
    
}
call('Abbigliamento.json').then(console.log);


