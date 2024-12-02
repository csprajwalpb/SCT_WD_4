document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDateTime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');

    // Handle task addition
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskDate = taskDateTime.value;

        if (taskText && taskDate) {
            addTask(taskText, taskDate);
            taskForm.reset();
        }
    });

    // Add task to the list
    function addTask(taskText, taskDate) {
        const taskItem = document.createElement('li');

        taskItem.innerHTML = `
            <span class="task-details">
                <strong>${taskText}</strong> <br>
                <small>${new Date(taskDate).toLocaleString()}</small>
            </span>
            <div class="task-controls">
                <button class="mark">Mark Completed</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        // Mark task as completed
        taskItem.querySelector('.mark').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Edit task
        taskItem.querySelector('.edit').addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', taskText);
            const newTaskDate = prompt(
                'Edit the task date/time (YYYY-MM-DDTHH:MM):',
                taskDate
            );

            if (newTaskText && newTaskDate) {
                taskItem.querySelector('.task-details').innerHTML = `
                    <strong>${newTaskText}</strong> <br>
                    <small>${new Date(newTaskDate).toLocaleString()}</small>
                `;
            }
        });

        // Delete task
        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});
