import React, { useState } from 'react';
import { Box, Text, Button, Input, Textarea } from '@chakra-ui/react';

const Task = ({ task, handleToggleTask, handleDeleteTask, handleEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    handleEditTask(newTitle, newDescription);
    setIsEditing(false);
  };

  return (
    <Box mb={4}>
      <Text fontSize={task.completed ? 'lg' : 'xl'} textDecoration={task.completed ? 'line-through' : 'none'}>
        {task.title} - {task.description}
      </Text>
      <Button colorScheme={task.completed ? 'teal' : 'blue'} onClick={handleToggleTask} mr={2}>
        {task.completed ? 'Undo' : 'Complete'}
      </Button>
      <Button colorScheme="red" onClick={handleDeleteTask} mr={2}>
        Delete
      </Button>
      {!isEditing ? (
        <Button onClick={handleEdit}>Edit</Button>
      ) : (
        <>
          <Input mb={2} value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <Textarea mb={2} value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <Button colorScheme="teal" onClick={handleSave} mr={2}>
            Save
          </Button>
        </>
      )}
    </Box>
  );
};

export default Task;
