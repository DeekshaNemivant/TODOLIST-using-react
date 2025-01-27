import React, { useState, useEffect } from "react";
import "./App.css";
import Ta from "./Ta";
import "./c.css"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const[editTaskId,setEditTaskId]= useState(null)
  const[editTaskName,setEditTaskName]=useState("");
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todoList"));
    if (savedTasks) {
      setTodoList(savedTasks);
    }
  }, []);

  // useEffect(()=>{
  //   console.log("ghj",localStorage.getItem("todoList"))
  // },[])
  useEffect(() => {
    if(todoList.length>0){
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);
  

  const handleChange = (event) => {
    setNewTask(event.target.value);
    if(editTaskId!==null)
    {
      setEditTaskId(event.target.value)
    }
  };

  const addTask = (e) => {
    e.preventDefault()
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    setNewTask(""); // Clear input after adding task
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const editTask = (e) => { 
    e.preventDefault(); 
    setTodoList( todoList.map((task) => { 
      if (task.id === editTaskId) { 
        return { ...task, taskName: editTaskName }; 
      } else {
         return task;
         } }) ); 
         setEditTaskId(null); 
         setEditTaskName(""); 
         setNewTask("");
       };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>To-Do LIST</h1>
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={(e)=>{
          addTask(e)
        }}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <Ta
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
            editTask={(id, taskName) => { setEditTaskId(id); setEditTaskName(taskName); }}
          />
        ))}
      </div>
      {editTaskId !== null && ( 
        <div> <input value={editTaskName} onChange={(e) => setEditTaskName(e.target.value)} /> 
        <button onClick={editTask}>Update Task</button> 
        </div> )}
    </div>
  );
  
}

export default App;












/*import React, { useState, useEffect } from "react";
import "./App.css";
import Ta from "./Ta";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todoList"));
    if (savedTasks) {
      setTodoList(savedTasks);
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    setNewTask(""); // Clear input after adding task
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>To-Do LIST</h1>
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <Ta
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





*/










/*import "./App.css";
import { useEffect, useState } from "react";
import Ta from "./Ta";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(()=>
  {
    const savedTasks=JSON.stringify(localStorage.getItem("todoList"));
    if(savedTasks)
    {
      setTodoList(savedTasks);
    }
  },[])
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Ta 
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;


*/

















/*import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import { useState } from 'react';

function App() {
 
  const [todoList,setTodoList]=useState([]);
  const[newTask,setNewTask]= useState(""); //keeps tack of inputs we have in our to do list
  const handleChange=(event)=>
  {
    setNewTask(event.target.value);
  };
  const addTask=()=>
  {
    const task={
      id:todoList.length ===0 ?1 :todoList[todoList.length-1].id+1,
      taskName:newTask,
    }
    const newTodoList =[...todoList,newTask];
    setTodoList(newTodoList);

  }
  const deleteTask=(taskname)=>
  {
    
    setTodoList(todoList.filter((name)=> name!==taskname));

  }
  return (
    <div className="App">
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
      {todoList.map((task)=>
      {
        return (
          <div>
            <h1>{task.taskname}</h1>
            <button onClick={()=> deleteTask(task)}><i className="fas fa-trash"></i>
            </button>
          </div>
        )
      })
      }
    </div>
    </div>
  );
}

export default App;
*/