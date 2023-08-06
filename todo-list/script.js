// get elements
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoList = document.querySelector(".todo-list")

todoBtn.addEventListener("click", addTodo) // click on the Add button

// Function to add a new todo
function addTodo(e) {
    e.preventDefault();

    // if input fild is not empty
    if (todoInput.value !== '') {

        // Create a new div to hold the todo item
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';

        // Create a new list item for the todo text
        const newTodo = document.createElement('li');
        newTodo.className = 'todo-item';
        newTodo.innerText = todoInput.value;

        // Add the todo to the todo div and clear the input field
        todoDiv.appendChild(newTodo);
        todoInput.value = '';

        // create a completed button
        const completedBtn = document.createElement('button');
        completedBtn.innerText = `✔️`;
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);

        // create a delete button
        const trashBtn = document.createElement('button');
        trashBtn.innerText = `❌`;
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);

        todoList.appendChild(todoDiv); 
        
    }
}

// delete a todo or mark it as completed
function deleteTodo(e) {
    const item = e.target;

    // If the clicked element is a delete button
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fade-away')

        // Remove th etodo item from the list after the animation
        todo.addEventListener('transitionend', (e) => {
            todo.remove();
        });
    }

    // If the clicked element is a completed button
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        const todoItem = todo.querySelector('.todo-item') 
        todoItem.classList.toggle('completed') // Toggle the completed class to change appearance
    }
}

todoList.addEventListener('click', deleteTodo)