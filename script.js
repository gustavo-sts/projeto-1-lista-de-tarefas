const form = document.querySelector("#form-one");
const input = document.getElementById("task-name");
const taskList = document.querySelector(".task-list");

const addBtn = document.getElementById("add-task");
const saveBtn = document.getElementById("save");

const tasks = [];

function addtask() {
  const name = input.value.trim();

  if (name === "") return; // Sai da função se o nome estiver vazio

  const taskId = Date.now(); // Gera um ID único baseado no tempo atual
  const taskObject = { id: taskId, name };

  // Criar o item de lista com o nome e o botão de remoção
  let listItem = document.createElement("li");
  listItem.className = "list";
  listItem.dataset.id = taskId; // Define o ID como um atributo do elemento

  let taskName = document.createElement("p");
  taskName.innerText = name;

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remover tarefa";
  removeBtn.type = "button";

  // Função de remoção utilizando o ID
  removeBtn.addEventListener("click", () => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1); // Remove do array tasks
    }
    taskList.removeChild(listItem); // Remove do DOM
  });

  listItem.append(taskName, removeBtn);
  taskList.append(listItem);

  input.value = "";
  tasks.push(taskObject); // Adiciona a tarefa como um objeto
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