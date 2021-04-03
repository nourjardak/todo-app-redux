import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../Actions/Action";

const EditModal = ({handleClose,show,item}) => {
    const dispatch = useDispatch()
    const [taskmodified, setTaskmodified] = useState(item.task)
    const handleChange=(e)=>{
       setTaskmodified(e.target.value)
    }
    const handleCloseModal=()=>{
        dispatch(editTask({id:item.id,taskmodified:taskmodified}))
        handleClose()
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="edit task" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
