idCounter=0;
tasks=[];
function addTask(){
    input=document.getElementById("taskInput");
    taskList=document.getElementById("taskList");
    if(input.value!=""){
        task={
            id:idCounter++,
            text:input.value,
            completed:false
        }
        input.value="";
        tasks.push(task);
        renderTasks();
    }
}
function renderTasks(){
    taskList=document.getElementById("taskList");
    taskList.innerHTML="";
    tasks.forEach(task=>{
        taskItem=document.createElement("li");
        checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.onchange=function(){
            task.completed=this.checked;
        }
        taskItem.appendChild(document.createTextNode(`${task.id}: ${task.text}`));
        taskItem.appendChild(checkbox);
        taskList.appendChild(taskItem);
    });
    tasks.forEach(task=>{
        console.log(`${task.id}: ${task.text} - Completed: ${task.completed}`);
    }); 
}
function clearCompletedTasks(){
    tasks=tasks.filter(task=>!task.completed);
    renderTasks();

}