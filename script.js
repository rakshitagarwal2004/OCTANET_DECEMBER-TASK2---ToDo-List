function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var span = document.createElement('span');
        var deleteButton = document.createElement('button');

        span.appendChild(document.createTextNode(taskInput.value));
        li.appendChild(span);

        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.setAttribute('onclick', 'deleteTask(this)');
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}