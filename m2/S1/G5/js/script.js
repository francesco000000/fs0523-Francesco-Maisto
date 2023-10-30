window.addEventListener("scroll",function(){
    let top = window.scrollY;
    let header = document.querySelector('header');
    if (!top) {
        header.style.backgroundColor = `#ffc017` 
        
    }else{
        header.style.backgroundColor = `white` 
    }
    
    
})
let svg= document.querySelector("svg")
let x=svg.childNodes[3].firstElementChild.ariaLabel 
let arr= x.split(" ")
console.log(arr);
 let a=arr[(Math.floor(Math.random() * arr.length))];
 console.dir(a);