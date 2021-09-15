import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editUser, getUser } from '../../redux/actiontypes';
import './EditUser.css'
const EditUser = ({user}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [age, setAge] = useState(user.age)
    const dispatch = useDispatch()
    
    const edit = () =>{
         dispatch(editUser(user._id,fullName,email,age));
         dispatch(getUser())
         handleClose()
    }
    return (
        <div>
             <Button variant="warning"onClick={handleShow}>
        Edit
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title >edit user</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="form-control" 
              onChange={(e) =>setFullName(e.target.value)} 
              value={fullName} />
              <input type="text" 
              className="form-control"
              onChange={(e) =>setEmail(e.target.value)} 
              value={email} />
              <input type="text" 
              className="form-control"
              onChange={(e) =>setAge(e.target.value)} 
              value={age} />
          </form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  type="submit" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditUser
