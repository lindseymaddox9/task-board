// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const newTask ={
        id:generateId()
        title:title,
        descripton:description,
        deadline:deadline;
        status: "Not Started"
    };

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const newTask ={
        id:generateTask()
        title:title,
        descripton:description,
        deadline :deadline;
        status: "Not Started"
    };
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(taskboard) {
createTaskCard.getElementByID('taskboard')
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
handleAddTask(taskboard){
}
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    handleDeleteTask (taskboard){
    }
    }


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
const drop=ui.draggable;new task
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
document.addEventListener{
document.getElementbyID(date).flatpickr
date format: Y-m-d
}