const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
const todosListDiv = document.getElementById("todos-list");
const errorMessageDiv = document.getElementById("error-message");
const loadingDiv = document.getElementById("loading");
const fetchTodosBtn = document.getElementById("fetch-todos-btn");
const fetchCompletedBtn = document.getElementById('fetch-completed-btn');

// Variable global para guardar las tareas descargadas
let todosData = [];

// Mostrar todas las tareas en <div>
fetchTodosBtn.addEventListener("click", async () => {
    todosListDiv.innerHTML = ""; // Limpiar resultados anteriores
    errorMessageDiv.textContent = ""; // Limpiar errores anteriores
    loadingDiv.style.display = "block"; // Mostrar mensaje de cargando

    // Realizar petición GET
    const response = await fetch(todosEndpoint);

    loadingDiv.style.display = "none"; // Ocultar mensaje de cargando

    // ¿Hubo error en la petición?
    if (!response.ok) {
        errorMessageDiv.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
        return;
    }

    // Guardar los datos globalmente
    todosData = await response.json();

    if (todosData && todosData.length > 0) {
        todosListDiv.innerHTML = ""; // Limpiar antes de mostrar
        todosData.forEach((todo) => {
            const todoElement = document.createElement("div");
            todoElement.classList.add("todo-item");
            todoElement.classList.add(todo.completed ? "completed" : "pending");
            todoElement.innerHTML = `
          <p><strong>ID:</strong> ${todo.id}</p>
          <p><strong>Título:</strong> ${todo.title}</p>
          <p><strong>Completado:</strong> ${todo.completed ? "Sí" : "No"
                }</p>`;
            todosListDiv.appendChild(todoElement);
        });
    } else {
        todosListDiv.innerHTML = "<p>No se encontraron tareas.</p>";
    }
});

// Mostrar solo tareas completadas en <ul>
fetchCompletedBtn.addEventListener("click", () => {
    todosListDiv.innerHTML = ""; // Limpiar resultados anteriores
    errorMessageDiv.textContent = "";

    // Filtrar tareas completadas
    const completadas = todosData.filter(todo => todo.completed);

    if (completadas.length > 0) {
        const ul = document.createElement("ul");
        completadas.forEach(todo => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>ID:</strong> ${todo.id} - <strong>Título:</strong> ${todo.title}`;
            ul.appendChild(li);
        });
        todosListDiv.appendChild(ul);
    } else {
        todosListDiv.innerHTML = "<p>No hay tareas completadas.</p>";
    }
});