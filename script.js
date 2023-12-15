function addTask() {
    // Nessa parte do código eu pego a lista e o valor do input
    var List = document.getElementById("TaskList");
    var NewTask = document.getElementById("TypeTask").value;
    console.log(`A tarefa está armazenada, e é : ${NewTask}`)

    // Cria um item de lista que recebe o valor do input
    var Item = document.createElement('li')
    Item.textContent = NewTask

    // Cria um botão de delete que vai ficar dentro do item de lista
    var deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        List.removeChild(Item)
    }

    // Faz o delete ficar dentro do item, e o item dentro da lista
    Item.appendChild(deleteButton)
    List.appendChild(Item);

    // Após a ação ser executada o input fica vazio
}

document.getElementById("TypeTask").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Chama a função addTask se a tecla Enter for pressionada
        addTask();
    }
});