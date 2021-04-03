import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../Actions/Action";
import EditModal from "./EditModal";

const TaskAdded = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <span>{item.task}</span>
      <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
      <button onClick={() => dispatch(completeTask(item.id))}>
        {item.isDone ? "completed" : "Complete"}
      </button>
      <button onClick={handleShow}>Edit</button>
      <EditModal handleClose={handleClose} show={show} item={item} />
    </div>
  );
};

export default TaskAdded;
