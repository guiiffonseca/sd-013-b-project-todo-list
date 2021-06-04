//Requisitos 5 e 6
const list = document.querySelector('#lista-tarefas');
const bttn = document.querySelector('#criar-tarefa');
const eraser = document.querySelector('#apaga-tudo');
bttn.addEventListener('click', newTask);
function newTask() {
    const task = document.querySelector('#texto-tarefa').value;
    const itemList = document.createElement('li');
    itemList.innerText = task;
    list.appendChild(itemList);
    document.getElementById('texto-tarefa').value='';
}

//Requisitos 7 e 8
list.addEventListener('click', backgroundItem);
function backgroundItem(event){
   const item = document.querySelector('#lista-tarefas').children;
    for (let index = 0; index < item.length; index += 1){
        item[index].style.backgroundColor = '';
    }
    
    event.target.style.backgroundColor = 'rgb(128,128,128)';
}

//Requisito 9
list.addEventListener('dblclick', completedTask);
function completedTask (event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
    } else {
    event.target.classList.add('completed')
    }
}

//Requisito 10
eraser.addEventListener('click', clearList);

function clearList (event) {
   // const item = document.querySelector('#lista-tarefas').children;
    list.parentNode.removeChild(list);

    
}

