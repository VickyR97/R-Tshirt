import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import '../assests/messages.css'
import '../assests/sizing.css'
import Loader from "../Components/Loader";
import fire from "../config/firebase";

const Signup = ({history}) => {

    // INPUT VALUES
    const [inputs,setInputs] = useState({});

    // LOADING  STATE
    const [isLoading, setIsLoading] = useState(false)

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
    const [showPassword, setShowPassword] = useState(false)

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
       }else if(inputs.password.length < 6){
           errors.password = 'Password should be at least 6 characters'
       }

       //Confirm password Errors
       if(!inputs.confirmPassword){
           errors.confirmPassword = 'Confirm password is required'
       }else if(inputs.password !== inputs.confirmPassword){
            errors.confirmPassword = 'Password not match'
        }

       return errors;
    }

    // SUBMIT
    async function handleSubmit(){
        setIsSubmitted(true)
        const err = validate(inputs)
        if(Object.keys(err).length === 0){
            setIsLoading(true)

            // USER CREATION
            fire.auth().createUserWithEmailAndPassword(inputs.email, inputs.password)
                        .then(response =>{
                                      setIsLoading(false)
                                      return history.push("/login")
                            // console.log("Signed up  successfully...")
                        })
                        .catch(err =>{
                            setIsLoading(false)
                            // console.log("LOGIN-ERROR", err.message)
                            setError({...error, signUpError : err.message})
                        })
        }else{
            setError(err)
            // console.log(error)
        }
      }

    const signupForm = () =>{
        return(
                <div>
                <div className="text-center bg-dark text-white py-2">
                    <h4 className="font-weight-bold mt-2">T-Shop</h4>
                    <p><small><strong> Create your account in T-Shop </strong> </small> </p>
                </div>

            <Form className="border p-4">
                {isSubmitted && error.signUpError ? <p className="error-message">{error.signUpError}</p> : '' }
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Enter Email" onChange={handleInputChange} />
                    {isSubmitted && error.email ? <p className="error-message">{error.email}</p> : '' }
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter Password" onChange={handleInputChange} />
                    {isSubmitted && error.password ? <p className="error-message">{error.password}</p> : ''}
                </FormGroup>
                <FormGroup check className="mb-3 mt-4">
                    <Input type="checkbox" name="check" id="exampleCheck" onClick={()=> {setShowPassword(!showPassword)}} />
                    <Label for="exampleCheck" check>Show Password</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input type={showPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} />
                    {isSubmitted && error.confirmPassword ? <p className="error-message">{error.confirmPassword}</p> : ''}
                </FormGroup>
                <FormGroup>
                    <Button block className="bg-dark font-weight-bold py-2" onClick={handleSubmit}>Sign Up</Button>
                </FormGroup>  
                
                <div class="text-center mt-4">
                    Already registered
                    <Link to="/login" className="ml-2 text-decoration-none">Sign in?</Link>
                </div>
                    
            </Form>
            </div>
            
        )
    }    
    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center align-items-center m-0 pt-5 px-3">
            
                    <div className="column col-sm-12 col-md-3 col-xs-4 mt-5 p-0">
                        {isLoading && <Loader />}
                        {!isLoading && signupForm()}
                    
                </div>
            </div>
        </div>
    )
}

export default Signup;