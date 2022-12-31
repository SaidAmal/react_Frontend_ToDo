import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react';
import { addUser } from '../features/users/usersSlice.js';
import { useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
const ModalAdd = () => {
    const [show, setShow] = useState(false);
    const [dispalyError, setDisplayError] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // save fonction 
    const handleSave = async (e) => {
        if (user.firstName?.length && user.lastName?.length > 0) {

            try {
                dispatch(addUser(user))
                setUser({})
                handleClose()
            } catch (e) {
                setDisplayError(true)
            }
        }
        else {
            setDisplayError(true)
        }

    }

    const handleFieldChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const dispatch = useDispatch();
    const [user, setUser] = useState({})
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add new Personal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Personal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {dispalyError && <Alert variant={'danger'} > Incorrect field</Alert>}
                    <Form.Group >
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={handleFieldChange} />
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name="lastName" value={user.lastName}
                            onChange={handleFieldChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalAdd;