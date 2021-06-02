const list = document.querySelector('#lista-tarefas');

/*function clearTask() {
    document.querySelector('#texo-tarefa').value='';
}*/

function newTask() {
    const task = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.innerText = task;
    list.appendChild(itemList);
    document.getElementById('texto-tarefa').value='';
}

const bttn = document.querySelector('#criar-tarefa');
bttn.addEventListener('click', newTask);

