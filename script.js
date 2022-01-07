const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
const editButton = document.getElementById("Button");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
       addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    var editButton = document.createElement("i")

    divParent.className = "items";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    editButton.className = "fas fa-user-edit";
    editButton.style.color = "lightgray";
    editButton.addEventListener("click",function(){
        edit.input.addEventListener
    });

    divChild.appendChild(editButton);

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })
    

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash"
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}


edit(input)
    input.disabled = !input.disabled;
