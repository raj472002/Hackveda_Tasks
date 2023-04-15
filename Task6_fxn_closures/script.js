var tasks = []; // scoped variable to store tasks
		
// add task function
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;
    taskInput.value = "";
    
    function createTask() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
        
        // closure to remove task
        function removeTask() {
            var index = tasks.indexOf(task);
            tasks.splice(index, 1);
            li.parentNode.removeChild(li);
        }
        
        var removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove"));
        removeButton.onclick = removeTask;
        li.appendChild(removeButton);
        
        tasks.push(task);
    }
    
    createTask();
}