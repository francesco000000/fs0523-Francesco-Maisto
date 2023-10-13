let tabellone = document.querySelector(".tabellone")
let estrazione = document.querySelector(".estrazione")
let numEstratto = document.querySelector(".numeroEstratto")
let numero = document.querySelector(".numero")
for (let i = 1; i <=76; i++){
    let numero = document.createElement("div")
    numero.classList.add("numero")
    numero.innerText= i
    tabellone.append(numero)
  
}

estrazione.addEventListener("click",function() {
    let estratto =Math.floor(Math.random() * 77);
    numEstratto.innerText= estratto
   
})

