function addTask() {
    // I take the list and the value of input
    var List = document.getElementById("TaskList");
    var NewTask = document.getElementById("TypeTask").value;
    console.log(`A tarefa está armazenada, e é : ${NewTask}`)

    // Creates a list item that receive the value of input
    let Item = document.createElement('li')
    Item.textContent = NewTask

    // Creates a delete button that will be inside list item
    var deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        List.removeChild(Item) 
        updateLocalStorage(); 
    }

    // Makes delete stay inside on item, and item inside the list
    Item.appendChild(deleteButton)
    List.appendChild(Item);

    // After action be executed the input will be empty
    document.getElementById("TypeTask").value = '';

    // Update localStorage after add a task
    updateLocalStorage();
}

document.getElementById("TypeTask").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Calls the function addTask if enter key be pressioned
        addTask();
    }
});

function updateLocalStorage() {
    var taskItems = document.getElementById("TaskList").getElementsByTagName("li");
    var tasks = []

    // add text of each item of list on array
    for(var i = 0; i < taskItems.length; i++){
        tasks.push(taskItems[i].textContent.trim())
    }
    
    // Stores the array in localStorage as a JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasksFromLocalStorage() {
    var storedTasks = localStorage.getItem('tasks');

    if(storedTasks){
        // transforms the JSON back into an array
        var tasks = JSON.parse(storedTasks);
        console.log(tasks)

        var List = document.getElementById("TaskList");

        for(var i = 0; i < tasks.length; i++) {
            let Item = document.createElement("li")
            Item.textContent = tasks[i].replace("Delete", "");

            var deleteButton = document.createElement('button');
            deleteButton.id = 'deleteButton';
            deleteButton.textContent = 'Delete';

            deleteButton.onclick = function() {
                List.removeChild(Item);
                updateLocalStorage();
            };

            Item.appendChild(deleteButton);
            List.appendChild(Item);
        }
    }
}

loadTasksFromLocalStorage();