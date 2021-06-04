const list = document.querySelector('#lista-tarefas');

function newTask() {
    const task = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.innerText = task;
    list.appendChild(itemList);
    document.getElementById('texto-tarefa').value='';
}

const bttn = document.querySelector('#criar-tarefa');
bttn.addEventListener('click', newTask);

const listItem = document.querySelector('#lista-tarefas');
listItem.addEventListener('click', backgroundItem);

function backgroundItem(event){
    const item = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < item.length; index += 1){
        item[index].style.backgroundColor = '';
    }
    
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    
}
