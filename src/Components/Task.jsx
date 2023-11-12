import React, { useState } from 'react';

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
    <div>
      <p style={task.completed ? { textDecoration: 'line-through' } : {}}>
        {task.title} - {task.description}
        <button onClick={handleToggleTask}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDeleteTask}>Delete</button>
        {!isEditing ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </>
        )}
      </p>
    </div>
  );
};

export default Task;
