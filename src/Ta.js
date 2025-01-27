import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Ta = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.editTask(props.id, props.taskName)}>Edit </button>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
      <button onClick={() => props.deleteTask(props.id)}> X </button>
      
    </div>
  );
};

export default Ta;
