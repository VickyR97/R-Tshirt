import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import '../assests/messages.css'

export default function Login( {history} ) {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center align-items-center m-0 pt-5">
            
                    <div className="col-sm-12 col-md-3 mt-5 ">
                        <div className="text-center bg-dark text-white py-2">
                            <h4 className="font-weight-bold mt-2">ReactDoc</h4>
                            <p><small><strong> To continue, Sign in to ReactDoc </strong> </small> </p>
                        </div>

                    <Form className="border p-4">
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Enter Email" onChange={e=>{setValues({...values, email: e.target.value})}} />
                            {isSubmitted && values.email == '' ? <p className="error-message">Email is required </p> : ''}
                            {isSubmitted && values.email!== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ? <p className="error-message">Email is invalid </p> : ''}
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Enter Password" onChange={e=>{setValues({...values, password: e.target.value})}} />
                            {isSubmitted && values.password == '' ? <p className="error-message">Password is required </p> : ''}
                            {isSubmitted && values.password.length < 3 && values.password.length > 0 ? <p className="error-message">Password length must have 4 </p> : ''}
                        </FormGroup>
                        <FormGroup>
                            <Button block className="bg-dark font-weight-bold py-2" onClick={()=>{setIsSubmitted(true)} }>Login</Button>
                        </FormGroup>  
                        
                        <div className="text-center mt-4">
                            If you dont have account?
                            <Link to="/signup" className="ml-2">Create Account</Link>
                        </div>
                            
                    </Form>
                    
                </div>
            </div>
        </div>
    )
}
