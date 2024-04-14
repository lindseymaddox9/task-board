// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {}

// Todo: create a function to create a task card
function createTaskCard(task) {
(letTaskCard=title,description,date,id,status);
return createTaskCard;
}
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {}
const TaskCards = document.querySelectorAll("taskcard");
TaskCards


// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // capture the values of the title, description and dueDate
    const title = $('#title');
    const description =$('#description');
    const date = $('#deadline');
}

    // create object to store title, desc, date, id, status
const taskcard =[title,description,date,id,status];

  
    // add the new object to the array called taskList
const newtask =["title", "description","date","id","status"];
newtask.push("newobject");
    // save the array in local storage
    function addToLocalStorage(todo) {
      // convert the array to string then store it.
      localStorage.setItem('todos', JSON.stringify(todo));
      // render them to screen
      renderTodos(todo);
    }


localStorage.setItem
    // run the renderTaskList()
return thisarray."title"+"description"+"date"+"id"+"status";

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
   console log(delete TaskCard)  
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}
EventTarget.addEvent Listner(draggedCard);
call back function);

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$('#todo-form').on('submit', handleAddTask)

});
