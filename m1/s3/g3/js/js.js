let input = document.getElementById("to-do-list")
let bottone = document.getElementById("add")
let lista = document.getElementById("list")
bottone.addEventListener("click",function  () {
    let li = document.createElement("li")
   li.append(input.value)
   lista.append(li)
   li.classList.add("task")
   let btnLi =document.createElement("button")
   btnLi.classList.add("task-btn")
   btnLi.innerText= "elimina"
   li.append(btnLi)
   btnLi.addEventListener("click",function () {
    li.remove()
})
li.addEventListener("click",function () {
    li.style.textDecorationLine="line-through"
   
   })
li.addEventListener("mouseover",function () {
    li.style.cursor="pointer"

   })
})