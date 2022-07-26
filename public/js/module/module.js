
export let add = document.querySelector(".add")
export let input = document.querySelector(".todo-input")
export let list = document.querySelector(".list");
export let newInput = document.querySelector(".newInput");
export let newInputValue = document.querySelector(".newInputValue");
export let comfirmer = document.querySelector(".comfirmer");
export let annuler = document.querySelector(".annuler")
export let tous = document.querySelector(".tous")
export let encours = document.querySelector(".encours")
export let fini = document.querySelector(".fini")
export let listItem = document.createElement("div")
export let toDo = document.createElement("input");




export let allfunction = function(){ 
 if (input.value !== "") {
    // creation des div + append
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

                    
    let fmlValue = document.createElement("span")
    fmlValue.textContent = "changer";
    listItem.appendChild(fmlValue)
            
    let supprimer = document.createElement("span")
    supprimer.textContent = "x"
    listItem.appendChild(supprimer)
    


        // CHANGER LA VALEUR DE LA LIST

        fmlValue.addEventListener("click", function(){
            if (newInputValue.value != "") {
                toDo.value = newInputValue.value


            } else {
                alert("Vous devez saisir une valeur")
            }
        })



        // VALIDER UNE TACHE
        valider.addEventListener("click", function(){
            if (toDo.className == "done"){
                toDo.setAttribute('class','black')
            
            }else{
                toDo.classList = "done"
            
            }
        })

                    // TRIER LES TACHES FINIES
                 
    fini.addEventListener("click", function(){
        let listAll = list.querySelectorAll("div")
            for(let i = 0; i < listAll.length; i++){
                if (listAll[i].querySelector('input').className != "done"){
                        listAll[i].style.display = "none"
                    } else if (listAll[i].querySelector('input').className == "done") {
                        listAll[i].style.display = "flex"
                    }
                          
                }
        })

                    //  TOUT TRIER
    tous.addEventListener("click", function(){
        let listAll = list.querySelectorAll("div")
            for(let i = 0; i < listAll.length; i++){          
                listAll[i].style.display = "flex"
                listAll[i].style.justifyContent = "space-around"
            }
        })

    // TRIER LES TACHES EN COURS
    encours.addEventListener("click", function(){
        let listAll = list.querySelectorAll("div") 
            for(let i = 0; i < listAll.length; i++){
                 if (listAll[i].querySelector('input').className == "black" ){
                    listAll[i].style.display = "flex"
                                // listAll[i].style.display = "none"
                } else if (listAll[i].querySelector('input').className == "done") {
                                listAll[i].style.display = "none"
                            } 
                        }
                    })

    // SUPPRIMER LES TACHES 
    supprimer.addEventListener("click", function(e){
                        list.removeChild(e.path[1])
                    })

    // SI IL Y A RIEN DANS L INPUT
    } else {
        alert("Vous devez saisir une valeur")
 
    }

}


