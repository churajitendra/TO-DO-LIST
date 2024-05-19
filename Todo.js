let trial = document.getElementById('trial').value;
function addTask() {
    let getTask = document.getElementById('todo').value;
    let mainDiv = document.getElementById('taskdiv');


    let taskDiv = document.createElement('div')
    taskDiv.setAttribute('class', 'tasks')
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'check');
    input.setAttribute('id', 'chk' + trial);
    input.setAttribute('onclick', 'check(this,' + trial + ')')
    taskDiv.appendChild(input);
    let task = document.createElement('div');
    task.setAttribute('class', 'Alltask');
    task.setAttribute('id', 'task' + trial);
    task.textContent = `${getTask}`
    let time = document.createElement('span');
    time.setAttribute('class', 'time');
    time.textContent = new Date().toLocaleTimeString();
    task.appendChild(time);
    taskDiv.appendChild(task);
    let cross = document.createElement('i');
    cross.setAttribute('class', 'fa-solid fa-xmark');
    cross.setAttribute('onclick', 'this.parentNode.remove()')
    taskDiv.appendChild(cross);

    if (getTask !== "") {
        mainDiv.appendChild(taskDiv);
    } else {
        alert('Kuch Accha Kaam Karo Meri jaan...')
    }
    trial++;

}

function check(checkbox, trial) {
    let task = document.getElementById('task' + trial);
    if (checkbox.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}

window.onload = function date() {
    document.getElementById('dateDiv').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}