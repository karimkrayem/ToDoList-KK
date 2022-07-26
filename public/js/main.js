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

        let valider = document.createElement("span");
        valider.textContent = "valider"
        listItem.appendChild(valider)

        let supprimer = document.createElement("span")
        supprimer.textContent = "x"
        listItem.appendChild(supprimer)
        console.log(toDo.classList);


        


        let allSpans = document.querySelectorAll("span")


        valider.addEventListener("click", function(){
            if (toDo.className == "done"){
                toDo.setAttribute('class','black')

            }else{
                toDo.classList = "done"

            }
            
           


            





        })
        fini.addEventListener("click", function(){
            let listAll = list.querySelectorAll("div")

          
            for(let i = 0; i < listAll.length; i++){

                if (listAll[i].querySelector('input').className != "done"){
                    listAll[i].style.display = "none"


                } 
                console.log(listAll[i]);


             

            }
         
         })

    

        tous.addEventListener("click", function(){
            // console.log([toDo]);
    let listAll = list.querySelectorAll("div")
            
            console.log(listAll);

            for(let i = 0; i < listAll.length; i++){
                console.log(listAll[i]);


                listAll[i].style.display = "flex"
                listAll[i].style.justifyContent = "space-between"

                // if (listAll[i].classList = "done"){
                //     listAll[i].className = "black";
                  
                // }// else if (listAll[i].classList == "black"){
                //     listAll[i].style.display = "block"

                // }

            }
    
        })

        encours.addEventListener("click", function(){
            let listAll = list.querySelectorAll("div")

          
            for(let i = 0; i < listAll.length; i++){

                if (listAll[i].querySelector('input').className == "black" ){
                    listAll[i].style.display = "flex"
                    // listAll[i].style.display = "none"


                } else if (listAll[i].querySelector('input').className == "done") {
                    listAll[i].style.display = "none"

                }
                console.log(listAll[i]);


             

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