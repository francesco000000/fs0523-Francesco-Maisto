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
console.dir(svg.childNodes[3].firstElementChild.transform=


