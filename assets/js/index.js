var listElement = document.querySelector(".appList");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodo() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement('label');

        var checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', todo);

        var linkEl = document.createElement('a');
        linkEl.setAttribute('href', '#');
        linkEl.setAttribute("class", "fas fa-trash");

        var pos = todos.indexOf(todo);
        linkEl.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var iElement = document.createElement('i');

        var spanElement = document.createElement('span');
        spanElement.appendChild(document.createTextNode(todo));


        // var textLink = document.createTextNode("Excluir");
        // linkEl.appendChild(textLink);

        todoElement.appendChild(checkBox);
        todoElement.appendChild(iElement);
        todoElement.appendChild(spanElement);
        todoElement.appendChild(linkEl);

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
        saveToStorage();
    }
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);

    renderTodo();
    saveToStorage();
}


function saveToStorage() {
    localStorage.setItem('todo_list', JSON.stringify(todos));
}