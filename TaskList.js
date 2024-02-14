import React from 'react';

const TaskList = ({ tasks, onTaskComplete, onTaskRemove }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onTaskComplete(task.id)} // Call the onTaskComplete function
          />
          <span>{task.text}</span>
          <button onClick={() => onTaskRemove(task.id)}>Remove</button> {/* Add Remove button */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
