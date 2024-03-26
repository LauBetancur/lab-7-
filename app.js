document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { name: 'Hacer la compra', completed: false },
        { name: 'Terminar informe', completed: true },
        { name: 'Llamar al cliente', completed: false },
        { name: 'Terminar proyecto  prog ', completed: false },
        { name: 'Terminar behance de DYT', completed: true },
        { name: 'Terminar  pantallas ui', completed: true },
        { name: 'Pintar cuadro   ', completed: false },
        { name: 'Tomar agua  ', completed: false },
        { name: 'Hacer ejercicio', completed: false },
        { name: 'Ver youtube', completed: true },
    ];

    const taskList = document.getElementById('task-list');
    const taskStats = document.getElementById('task-stats');

    // Función para mostrar las tareas en el DOM
    function displayTasks() {
        taskList.innerHTML = ''; 
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            const taskName = document.createElement('span');
            taskName.textContent = task.name;
            if (task.completed) {
                taskName.classList.add('completed'); // Tachar el texto de las tareas completadas :)
            }
            taskItem.appendChild(taskName);
            const taskStatus = document.createElement('span');
            taskStatus.textContent = task.completed ? 'Completada' : 'Por hacer';
            taskStatus.classList.add('task-status', task.completed ? 'completed' : 'pending');
            taskItem.appendChild(taskStatus);
            // Botón redondo para marcar la tarea como completada 
            const completeBtn = document.createElement('button');
            completeBtn.classList.add('complete-btn'); // Agregar la clase complete-btn al botón
            completeBtn.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                completeBtn.classList.toggle('completed'); // Cambiar el color del botón al completar la tarea :C no pude del todo pero enteoria es asi 
                displayTasks(); // Actualizar la vista después de marcar la tarea
            });
            taskItem.appendChild(completeBtn);
            taskList.appendChild(taskItem);
        });

        // Calculo de cuentas de Tareas completadas y pendientes
        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = tasks.filter(task => !task.completed).length;
        taskStats.innerHTML = `Tareas completadas: ${completedTasks}<br>Tareas pendientes: ${pendingTasks}`;
    }

    displayTasks(); 
});
