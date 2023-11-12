import { useState, useEffect } from 'react';

export function useTaskManager() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
    );
  };
  

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}
