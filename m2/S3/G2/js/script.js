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
    lista.lastChild.remove()
    localStorage.removeItem('utente');
    
})
let arr=[];
const element = document.getElementById("demo");
setInterval(function() {
    arr.push(element.innerHTML++)
    sessionStorage.setItem('time',JSON.stringify(arr));
 
        }
        , 1000);
        

   