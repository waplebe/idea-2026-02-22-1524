document.addEventListener('DOMContentLoaded', function() {
    const newTaskButton = document.getElementById('newTaskButton');
    const taskList = document.getElementById('taskList');

    // Fetch tasks from the API
    axios.get('http://localhost:5000/tasks')
        .then(response => {
            taskList.innerHTML = ''; // Clear existing tasks
            response.data.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <button class="deleteTaskButton" data-id="${task.id}">Delete</button>
                `;
                taskList.appendChild(taskElement);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });

    // Add new task
    newTaskButton.addEventListener('click', () => {
        const title = prompt("Enter task title:");
        const description = prompt("Enter task description:");

        if (title && description) {
            axios.post('http://localhost:5000/tasks', { title, description })
                .then(response => {
                    // Refresh task list after creation
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error creating task:', error);
                });
        }
    });

    // Delete task
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteTaskButton')) {
            const taskId = event.target.dataset.id;
            axios.delete(`http://localhost:5000/tasks/${taskId}`)
                .then(response => {
                    // Refresh task list after deletion
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error deleting task:', error);
                });
        }
    });
});