const form = document.querySelector("#form-one");

const input = document.getElementById("task-name");
const taskList = document.querySelector(".task-list");

const addBtn = document.getElementById("add-task");
const saveBtn = document.getElementById("save");

const tasks = [];

function addtask(name) {
  name = input.value;

  if (!name != "") {
    
  } else {
    let listItem = document.createElement("li");
    listItem.className = "list";

    let taskName = document.createElement("p");
    taskName.innerText = name;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remover tarefa";
    removeBtn.id = "rmv-btn";
    removeBtn.type = "button";

    removeBtn.addEventListener("click", () => {
      taskList.removeChild(listItem)
      const index_of_name = tasks.indexOf();
      tasks.pop(index_of_name);
    });

    taskList.append(listItem);
    listItem.append(taskName, removeBtn);

    input.value = "";

    tasks.push(name);
  }
}

addBtn.addEventListener("click", addtask);

saveBtn.addEventListener("click", () => {
  sessionStorage.setItem("numbers_of_tasks", tasks.length);
  const exibir = sessionStorage.getItem("numbers_of_tasks");
  alert(`O número de tarefas salvas é: ${exibir}`);
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  addtask();
});