const list = document.querySelector('#lista-tarefas');



function newTask() {
    const task = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.innerText = task;
    list.appendChild(itemList);
    console.log(task)
}

const bttn = document.querySelector('#criar-tarefa');
bttn.addEventListener('click', newTask);

console.log('qualq')
    