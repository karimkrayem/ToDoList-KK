
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
let newfkInput = document.querySelector(".newfkInput")




export let allfunction = function(){ 

    

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

                    
                    let fmlValue = document.createElement("span")
                    fmlValue.textContent = "changer";
                    listItem.appendChild(fmlValue)
            
                    let supprimer = document.createElement("span")
                    supprimer.textContent = "x"
                    listItem.appendChild(supprimer)
                    console.log(toDo.classList);

                    fmlValue.addEventListener("click", function(){
                       toDo.value = newInputValue.value
                    })



                    // let allSpans = document.querySelectorAll("span")
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
                            } else if (listAll[i].querySelector('input').className == "done") {
                                listAll[i].style.display = "flex"
                            }
                            console.log(listAll[i]);
                        }
                     })
                    tous.addEventListener("click", function(){
                let listAll = list.querySelectorAll("div")
                        for(let i = 0; i < listAll.length; i++){
                            console.log(listAll[i]);
                            listAll[i].style.display = "flex"
                            listAll[i].style.justifyContent = "space-around"
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

           
                    
       
  
}




//  let nvlList = function(){

    

    
//     console.log(allDocSpan  );




//     // allDocSpan.addEventListener("dblclick", function(){
//     //     console.log("yo");
//     // })
// }
    



