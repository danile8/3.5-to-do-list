const total = document.querySelector("#total");
const done = document.querySelector("#done");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const tasks = document.querySelector("#tasks");
const taskList = [];

function renderTasks() {
    let html = "";
    for (let task of taskList) {
      html += `<tr><td>${task.id}</td>
      <td>${task.tarea}</td>
      <td><input type="checkbox" onclick="tachar(${task.id})"></td>
      <td><button onclick="borrar(${task.id})"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`;
    }
    tasks.innerHTML = html;
    total.innerHTML = `${taskList.length}`;
  }

  function renderRealizadas(){
    let doneTasks = 0;
    for (let task of taskList) {
        if (task.realizada == true){
          doneTasks +=1;
        }
        done.innerHTML = doneTasks;
    }
  }

/*agregamos tarea a la lista*/
addBtn.addEventListener("click", () => {
  const newTask = taskInput.value;
  taskList.push({ id: Date.now(), tarea: newTask, realizada: false });
  taskInput.value = "";
  renderTasks();
});
function borrar(id) {
  const index = taskList.findIndex((ele) => ele.id == id);
  taskList.splice(index, 1);
  renderTasks();
  renderRealizadas();
}
function tachar(id){
    const index = taskList.findIndex((ele) => ele.id == id);
    taskList[index].realizada = true;
    console.log(taskList[index].realizada);
    console.log(taskList[1].realizada);
    renderRealizadas();
}


