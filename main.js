
// var TDButton = document.getElementById("addToDo");
// var TDContainer = document.getElementById("ToDoContainer");
// var inputField = document.getElementById("inputField");

// TDButton.addEventListener("click",function(){
//     var paragraph = document.createElement('p')
//     paragraph.innerText = inputField.value;
//     TDContainer.appendChild(paragraph);
//     inputField.value = "";

//     paragraph.addEventListener("click", function(){
//         paragraph.style.textDecoration = "line-through";
//     })

//     paragraph.addEventListener("dblclick", function(){
//         TDContainer.removeChild(paragraph);
//     })
// })

// var tag = document.createElement("p");
// var text = document.createTextNode("Tutorix is the best e-learning platform");
// tag.appendChild(text);
// var element = document.getElementById("app");
// element.appendChild(tag);

//creando el titulo
var titleText = document.createElement("h1");
var title = document.createTextNode("To Do List");
titleText.appendChild(title);
var element1 = document.getElementById("app");
element1.appendChild(titleText);

//creando el texto de instrucciones
var instructionText = document.createElement("p");
var tutorial = document.createTextNode("To add a task, type it on the input field and click on 'Add' button. To complete a task, click once on it, and to delete a task, just click on the respective 'Delete' button of the task");
instructionText.appendChild(tutorial);
var element0 = document.getElementById("app");
element0.appendChild(instructionText);

//creando el input field
var inputField = document.createElement("input");
inputField.id = "inputField";
inputField.type = "text";
inputField.placeholder = "Type your task please";
var element2 = document.getElementById("app");
element2.appendChild(inputField);

//creando el boton add
var addButton = document.createElement("button");
addButton.id = "addToDo";
addButton.innerHTML = "+";
var element3 = document.getElementById("app");
element3.appendChild(addButton);

//creando el espacio de las tareas
var taskContainer = document.createElement("div");
taskContainer.class = "to-dos";
taskContainer.id = "ToDoContainer";
var element4 = document.getElementById("app");
element4.appendChild(taskContainer);

//haciendo las funciones para agregar y quitar tareas

var TDButton = document.getElementById("addToDo");
var TDContainer = document.getElementById("ToDoContainer");
var inputBox = document.getElementById("inputField");

TDButton.addEventListener("click",function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    TDContainer.appendChild(paragraph);
    TDContainer.appendChild(deleteButton);
    inputBox.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener("click", function(){
        TDContainer.removeChild(paragraph);
        TDContainer.removeChild(deleteButton);
    })
})