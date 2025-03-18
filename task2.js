const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskDeadlineInput = document.getElementById("taskDeadline");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const deadline = taskDeadlineInput.value;

    if (title && description && deadline) {
        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDeadlineInput.value = "";
    }
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        if (task.completed) taskItem.classList.add("completed");

        taskItem.innerHTML = `
            <div>
                <strong>${task.title}</strong><br>
                ${task.description}<br>
                <small>Due: ${task.deadline}</small>
            </div>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleComplete(${task.id})" />
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    renderTasks();
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    taskTitleInput.value = task.title;
    taskDescriptionInput.value = task.description;
    taskDeadlineInput.value = task.deadline;
    deleteTask(taskId); 
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

renderTasks();
