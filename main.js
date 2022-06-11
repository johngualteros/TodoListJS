const dateNumber=document.getElementById('dateNumber');
const dateText=document.getElementById('dateText');
const dateYear=document.getElementById('dateYear');
const dateMonth=document.getElementById('dateMonth');

const tasksContainer=document.getElementById('tasksContainer');

const setDate=()=>{
    const date=new Date();
    dateNumber.textContent = date.toLocaleString('es',{day:'numeric'});
    dateText.textContent = date.toLocaleString('es',{weekday:'long'});
    dateMonth.textContent = date.toLocaleString('es',{month:'short'});
    dateYear.textContent = date.toLocaleString('es',{year:'numeric'});
};
const addNewTask=()=>{
    event.preventDefault();
    const {value} =event.target.taskInput;
    if(!value)return;
    const task=document.createElement('div');
    task.classList.add('task','roundBordered');
    task.addEventListener('click',changeTaskState)
    task.textContent=value;
    tasksContainer.prepend(task);
    event.target.reset();
}
const changeTaskState=()=>{
    event.target.classList.toggle('done');
};
const order=()=>{
    const done=[];
    const toDo=[];
    tasksContainer.childNodes.forEach(el=>{
        el.classList.contains('done')?done.push(el):toDo.push(el);
    });
    return [...toDo,...done];
};
const renderOrderedTasks=()=>{
    order().forEach(el=>tasksContainer.appendChild(el));
};

setDate();