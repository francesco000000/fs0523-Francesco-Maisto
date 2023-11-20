let giocatore1:number= 80;
let giocatore2:number= 70;
let numGenerato:number = Math.floor(Math.random() * 101);
let dif1:number=giocatore1-numGenerato;
let dif2:number=giocatore2-numGenerato;
if (numGenerato==giocatore1) {
    console.log(`${giocatore1} e uguale a  ${numGenerato}`);
    
}else if (numGenerato==giocatore2){
    console.log(`${giocatore2} e uguale a  ${numGenerato}`);
    
}else if (giocatore1!= numGenerato&& giocatore2!= numGenerato && dif1<dif2){
    console.log(`${giocatore1} si avvicina  ${numGenerato}`);
}else if (giocatore1!= numGenerato&& giocatore2!= numGenerato && dif2<dif1){
    console.log(`${giocatore2} si avvicina  ${numGenerato}`);
}
    

    


let g1:HTMLElement|null = document.querySelector('#giocatore1')
let g2:HTMLElement|null = document.querySelector('#giocatore2')
let btn:HTMLElement|null  = document.querySelector('#btn')
let span:HTMLElement|null  = document.querySelector('.numeroGenerato')

