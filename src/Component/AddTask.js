import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Actions/Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value)
  };
  const addItem=()=>{
      if(task){
        dispatch(addTask({ task: task, isDone: false, id: Math.random()}))
        setTask('')
      }else{
          alert('please enter a valid task')
      }
  }
  return (
    <div>
      <h1>my todo list</h1>
      <input
        type="text"
        placeholder="please type a task"
        onChange={handleChange}
        value={task}
      />
      <button
        onClick={addItem}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;
