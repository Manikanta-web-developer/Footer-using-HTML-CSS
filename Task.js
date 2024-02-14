import React from 'react';

const Task = ({ task, onTaskComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskComplete(task.id)} // Call the onTaskComplete function
      />
      <span>{task.text}</span>
    </div>
  );
};

export default Task;
