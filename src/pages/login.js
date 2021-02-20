import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import '../assests/messages.css'
 
export default function Login( {history} ) {
    // INPUT VALUES
    const [inputs,setInputs] = useState({});

    // HANDLE CHANGE
    const handleInputChange = (event) => {
      setIsSubmitted(false)
      setError({})  
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
    
    // ERROR
    const [error, setError] = useState({})
    
    // SUBMIT STATE
    const [isSubmitted, setIsSubmitted] = useState(false)

    // VALIDATION FUNCTION
    const validate = (inputs) => {

        //Email errors
       const errors = {};
       if (!inputs.email) {
           errors.email = 'Email is required';
       } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)
       ) {
           errors.email = 'Invalid email address';
       }

       //Password Errors
       if(!inputs.password){
           errors.password = 'Password is required'
       }else if(inputs.password.length < 4){
           errors.password = 'Password length must have 4'
       }
       return errors;
    }

    // SUBMIT
    const handleSubmit = () => {
        setIsSubmitted(true)
        const err = validate(inputs)
        if(Object.keys(err).length === 0){
            return history.push("/home")
        }else{
            setError(err)
            // console.log(error)
        }
      }

    return (
        <div className="container-fluid p-0">
            <div className="row-size row justify-content-center align-items-center m-0 pt-5">
            
                    <div className="column col-sm-12 col-md-3 mt-5 ">
                        <div className="text-center bg-dark text-white py-2">
                            <h4 className="font-weight-bold mt-2">ReactDoc</h4>
                            <p><small><strong> To continue, Sign in to ReactDoc </strong> </small> </p>
                        </div>

                    <Form className="border p-4">
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email" placeholder="Enter Email" value={inputs.email} onChange={handleInputChange} />
                            {isSubmitted && error.email ? <p className="error-message">{error.email}</p> : '' }
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" name="password" placeholder="Enter Password" value={inputs.password} onChange={handleInputChange} />
                            {isSubmitted && error.password ? <p className="error-message">{error.password}</p> : ''}
                        </FormGroup>
                        <FormGroup>
                            <Button block className="bg-dark font-weight-bold py-2" onClick={handleSubmit}>Login</Button>
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
