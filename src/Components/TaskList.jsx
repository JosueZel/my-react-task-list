import React, { useState } from 'react';
import { useTaskManager } from './useTaskManager';
import Task from './Task';

const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    // Validate the input
    if (formData.title.length < 3) {
      alert('El titulo debe tener almenos 3 caracteres.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      completed: false,
    };

    createTask(newTask);
    setFormData({
      title: '',
      description: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <label>
          Titulo:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Titulo"
          />
        </label>
        <br />
        <label>
          Descripcion de tarea:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Descripcion de tarea"
          />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleToggleTask={() => updateTask(task.id, { completed: !task.completed })}
          handleDeleteTask={() => deleteTask(task.id)}
          handleEditTask={(newTitle, newDescription) =>
            updateTask(task.id, { title: newTitle, description: newDescription })
          }
        />
      ))}
    </div>
  );
};

export default TaskList;
