import { List } from "./module/module.js";

let input = document.querySelector(".todo-input")
let add = document.querySelector(".add")
let list = document.querySelector(".list");
let newInput = document.querySelector(".newInput");
let newInputValue = document.querySelector(".newInputValue");
let comfirmer = document.querySelector(".comfirmer");
let annuler = document.querySelector(".annuler")
let tous = document.querySelector(".tous")
let encours = document.querySelector(".encours")
let fini = document.querySelector(".fini")






add.addEventListener("click", function(){
    if (input.value !== "") {
        let listItem = document.createElement("div")
        listItem.className = "listItem"
        list.appendChild(listItem)

        let toDo = document.createElement("input");
        toDo.disabled = "true"
        toDo.value += input.value
        toDo.classList = "black"
        listItem.appendChild(toDo)

        let supprimer = document.createElement("span")
        supprimer.textContent = "x"
        listItem.appendChild(supprimer)
        console.log(toDo.classList);


        let valider = document.createElement("span");
        valider.textContent = "valider"
        listItem.appendChild(valider)


        valider.addEventListener("click", function(){
            if (toDo.className == "done"){
                toDo.setAttribute('class','black')

            }else{
                toDo.classList = "done"

            }
            
           


            





        })
        fini.addEventListener("click", function(){
            console.log(toDo.className);
             if (toDo.className == "done"){
                 console.log("yoo");
                 

         
             }  if (toDo.className == "black"){
                 listItem.className = "dnone"
             }
         
         })
        supprimer.addEventListener("click", function(e){
            console.log(e);
            list.removeChild(e.path[1])



            
            
        }) 


    } else {
        alert("nope")

    }

})


annuler.addEventListener("click", function(){
    console.log("yoo");
})




// dbl(){}


    // supprimer.addEventListener()



// console.log(supprimer.textContent);