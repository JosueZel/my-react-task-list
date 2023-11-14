import React, { useState } from 'react';
import { useTaskManager } from './useTaskManager';
import Task from './Task';
import { Box, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react';

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
      alert('El titulo debe tener al menos 3 caracteres.');
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
    <VStack align="center" mt={8}>
      <Heading mb={4}>Lista de Tareas</Heading>
      <form onSubmit={handleAddTask}>
        <Input
          mb={2}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Titulo"
        />
        <Textarea
          mb={2}
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Descripcion de tarea"
        />
        <Button type="submit" colorScheme="teal">
          Add Task
        </Button>
      </form>

      <VStack mt={4} align="start">
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
      </VStack>
    </VStack>
  );
};

export default TaskList;
