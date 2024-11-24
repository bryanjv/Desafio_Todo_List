const tasks = [
    { id: 1, descripcion: "Saltar la cuerda en la carretera", completado: false },
    { id: 2, descripcion: "Comprar departamento", completado: false },
    { id: 3, descripcion: "Bailar con la radio en volumen 0", completado: false },
  ];
  
  const taskList = document.getElementById("task-list");
  const totalTasks = document.getElementById("total-tasks");
  const completedTasks = document.getElementById("completed-tasks");
  
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.descripcion;
  
      if (task.completado) li.style.textDecoration = "line-through";
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Cambiar";
      completeBtn.onclick = () => toggleTaskCompletion(task.id);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.onclick = () => deleteTask(task.id);
  
      li.append(completeBtn, deleteBtn);
      taskList.append(li);
    });
    updateSummary();
  }
  
  function addTask(event) {
    event.preventDefault();
    const input = document.getElementById("task-input");
    if (!input.value.trim()) return;
  
    tasks.push({
      id: Date.now(),
      descripcion: input.value,
      completado: false,
    });
    input.value = "";
    renderTasks();
  }
  
  function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) tasks.splice(index, 1);
    renderTasks();
  }
  
  function toggleTaskCompletion(id) {
    const task = tasks.find((task) => task.id === id);
    if (task) task.completado = !task.completado;
    renderTasks();
  }
  
  function updateSummary() {
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter((task) => task.completado).length;
  }
  
  document.getElementById("task-form").addEventListener("submit", addTask);
  renderTasks();
  