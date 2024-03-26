function enter() {
    let task = document.getElementById("text").value;
    if (task.length == 0) {
        alert("Enter your tasks First");
    }
    else {
        document.getElementById("text").value = " "
        let taskList = document.createElement("li");
        let c = document.getElementById("div2");
        taskList.innerHTML = task;
        c.appendChild(taskList);
        let d = document.createElement("h4");
        d.setAttribute('class', 'delete');
        d.innerHTML = "Remove";
        c.appendChild(d);
        d.addEventListener('click', function del() {
            d.innerHTML = ""
            taskList.innerHTML = ''
            taskList.style = "display: none;"
        });
        updateLocalStorage();
    }
}
function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll("#div2 li").forEach(item => {
        tasks.push(item.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function displayTasksFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        tasks = JSON.parse(tasks);
        let c = document.getElementById("div2");
        c.innerHTML = "";
        tasks.forEach(task => {
            let taskList = document.createElement("li");
            taskList.textContent = task;
            let d = document.createElement("h4");
            d.setAttribute('class', 'delete');
            d.textContent = "Remove";
            d.addEventListener('click', function () {
                taskList.remove();
                d.remove();
                updateLocalStorage();
            });
            c.appendChild(taskList);
            c.appendChild(d);
        });
    }
}

window.onload = displayTasksFromLocalStorage;
