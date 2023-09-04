const body = document.body;

let todos = [
    {title: "makan",
    dueDate: "2022-04-05",
    id: "id1"
},  {title: "minum",
    dueDate: "2022-05-04",
    id: "id2"
}, {title: "belajar",
    dueDate: "2022-06-07",
    id: "id3"
}];
render();

function addTodo() {
    let textBox = document.getElementById('todo-title');
    let title = textBox.value;
    let date = document.getElementById('date');
    let dueDate = date.value;

    const id = '' + new Date().getTime();
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
}

todos = todos.filter(function(todo){
    if(todo.id === idToDelete){
        return false;
    }else {
        return true;
    }
})

function render() {
    //reset
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todos) {
        const element = document.createElement('div');
        element.innerText = todos.title + ' ' + todos.dueDate;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.style = 'margin-left: 12px';
        deleteButton.id = todos.id;
        deleteButton.onclick = deleteTodo;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.append(element);   
    });
}








