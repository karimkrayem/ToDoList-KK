import { List } from "./module/module.js";

let input = document.querySelector(".todo-input")
let add = document.querySelector(".add")
let list = document.querySelector(".list");
let newInput = document.querySelector(".newInput");
let NewInputValue = document.querySelector(".newInputValue");






add.addEventListener("click", function(){
    let listItem = document.createElement("div")
    listItem.className = "listItem"
    list.appendChild(listItem)
    let toDo = document.createElement("input");
    toDo.disabled = "true"

    toDo.value += input.value
    listItem.appendChild(toDo)
    let supprimer = document.createElement("span")
    supprimer.textContent = "x"
    listItem.addEventListener("dblclick", function(){
        toDo.replaceWith(newInput)
        newInput.className = "newInput"
        
        console.log("tii");
    
    })
    listItem.appendChild(supprimer)



   

    if (input.value !== "") {
        supprimer.addEventListener("click", function(e){
            console.log(e);
            list.removeChild(e.path[1])
            
            
        }) 


    } else {
        alert("nope")

    }

    




})




    // supprimer.addEventListener()



// console.log(supprimer.textContent);