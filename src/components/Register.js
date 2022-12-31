import React, { useState } from "react";
import './login.css';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { validateEmail } from "../helpers/validators";
const Register = () => { 
    //declaration fields 
    const [fields, setFields] = useState({})
    // navigate 
    const navigate = useNavigate();
    //errors validations
    const [dispalyError, setDisplayError] = useState(false)
    
    const handleFieldChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }
    // fonction submit 
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateEmail(fields.email) && fields.password?.length > 0 && fields.password === fields.confirm_password) {
            try {
                const data = { email: fields.email, password: fields.password }
                const res = await axios.post('http://localhost:3030/users', data)
                navigate("/login", { replace: true });
            } catch (e) {
                setDisplayError(true)
            }
        }
        else {
            setDisplayError(true)
        }
    }
    return (
        <div className="login">
            <div>
                <h2 className="Create_account">  Create account</h2>
                {dispalyError && <Alert variant={'danger'} > Incorrect credentials, please verify your email / password.</Alert>}
            </div>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" name="email" placeholder="Email" value={fields.email}
                        onChange={handleFieldChange} className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" name="password" placeholder="Password" value={fields.password}
                        onChange={handleFieldChange} />

                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" value={fields.confirm_password}
                        onChange={handleFieldChange} />
                </div>
                <div className="form-outline mb-4 btn-position">
                    <button type="button" className="btn btn-primary btn-sm submit-btn" onClick={handleSubmit}>Sign In</button>
                </div>
                <div className="form-outline mb-4 btn-position">
                    <Link to="/login" className="account_link " aria-current="page">Back</Link>
                </div>
            </form>
        </div>
    );
};
export default Register;