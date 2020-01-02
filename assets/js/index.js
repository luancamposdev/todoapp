var listElement = document.querySelector(".appList");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar Blog da MicroCompanny'
]

function renderTodo() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement('label');

        var checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', todo);

        var iElement = document.createElement('i');

        var spanElement = document.createElement('span');
        spanElement.appendChild(document.createTextNode(todo));

        todoElement.appendChild(checkBox);
        todoElement.appendChild(iElement);
        todoElement.appendChild(spanElement);

        listElement.appendChild(todoElement);



    }
}

renderTodo();

function addTodo() {
    var todoText = inputElement.value;

    if (inputElement.value != '') {
        todos.push(todoText)
        inputElement.value = "";

        renderTodo();
    }
}

buttonElement.onclick = addTodo;