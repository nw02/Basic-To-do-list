function addTask() {
    // I take the list and the value of input
    var List = document.getElementById("TaskList");
    var NewTask = document.getElementById("TypeTask").value;
    console.log(`A tarefa está armazenada, e é : ${NewTask}`)

    // Creates a list item that receive the value of input
    var Item = document.createElement('li')
    Item.textContent = NewTask

    // Creates a delete button that will be inside list item
    var deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        List.removeChild(Item)
    }

    // Makes delete stay inside on item, and item inside the list
    Item.appendChild(deleteButton)
    List.appendChild(Item);

    // After action be executed the input will be empty
}

document.getElementById("TypeTask").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Calls the function addTask if enter key be pressioned
        addTask();
    }
});