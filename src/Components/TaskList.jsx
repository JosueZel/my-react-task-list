import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  const initialTaskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialTaskList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTitle, newDescription) => {
    const newTasks = [...tasks];
    newTasks[index].title = newTitle;
    newTasks[index].description = newDescription;
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        placeholder="Titulo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Descripcion de tarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {tasks.map((task, index) => (
        <Task
          key={task.id}
          index={index}
          task={task}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
