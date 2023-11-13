let input = document.querySelector("input")
let salva = document.querySelector(".salva")
let rimuovi = document.querySelector(".rimuovi")
let lista = document.querySelector(".list")
salva.addEventListener("click",function () {
    localStorage.setItem('utente',input.value);
    let li = document.createElement("li")
    li.innerText= input.value
    lista.append(li)
    input.value =  " "
   
})

rimuovi.addEventListener("clck",function(){
   
    localStorage.removeItem('utente');
    
})




const element = document.getElementById("demo");
let t = sessionStorage.getItem('time')
element.innerHTML= t
setInterval(function() {

    sessionStorage.setItem('time',element.innerHTML++);
 
        }
        , 1000);
        

   