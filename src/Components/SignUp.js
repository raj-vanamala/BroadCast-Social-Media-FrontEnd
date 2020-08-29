import React from 'react'
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'
import { FaKey,FaEnvelope, FaUser, FaMobile, FaGitlab, FaQuestion } from 'react-icons/fa'
import SignIn from './SignIn';
import App from "./App";

import { connect } from 'react-redux'
import  setCurrentUser  from '../Actions/CREDENTIALS_ACTIONS'

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName : "",
            email : "",
            password : "",
            mobile : "",
            status : "Single",
            handle : "",
            IS_LOGIN_SUCCESS : false,
            JWT : "",
            FIRST_NAME : "",
            IS_SIGN_IN : false
        }
    }

    changeCredentialValues = (event) => {
        let target = event.target;

        if(target.name === "firstName"){
            this.setState({
                firstName : target.value
            })
        }
        else if(target.name === "mobile"){
            this.setState({
                mobile : target.value
            })
        }
        else if(target.name === "email") {
            this.setState({
                email : target.value
            })
        }
        else if(target.name === "password"){
            this.setState({
                password : target.value
            })
        }
        else if(target.name === "status"){
            this.setState({
                status : target.value
            })
        }
        else if(target.name === "handle"){
            this.setState({
                handle : target.value
            })
        }
    }

    verifyCredentials = (event) => {


            event.preventDefault();
    
            let url = 'https://broadcast-socialmedia-backend.herokuapp.com/signUp'
    
            fetch(url,{
                "method" : "post",
                "headers" :{
                    'Content-Type': 'application/json'
                },
                "body" : JSON.stringify({
                    "firstName" : this.state.firstName,
                    "email" : this.state.email,
                    "password" : this.state.password,
                    "mobile" : this.state.mobile,
                    "status" : this.state.status,
                    "handle" : this.state.handle
                })
            })
    
            .then((response)=>response.json())
    
            .then((data)=>{
                alert(data.message);
                if(data.status === 'success') {
                    this.setState({
                        IS_LOGIN_SUCCESS : true,
                        JWT : data.token,
                        FIRST_NAME : this.state.firstName,
                        IS_SIGN_IN : undefined
                    })
                    return data.userDetails
                }
            })
    
            .then((user)=>{
                window.localStorage.setItem('authorizationToken',this.state.JWT)
                this.setState({
                    firstName : "",
                    mobile :"",
                    email : "",
                    password : "",
                    status : "Single",
                    handle : ""
                })
                this.props.setCurrentUser(user)
            })
    
            .catch((err)=>alert(err))
    }

    displaySignInComponent = () => {

        this.setState({
            IS_SIGN_IN : !this.state.IS_SIGN_IN
        })
    }

    displaySignUpComponent = () => {

        return (
            <div style = {{width: "50%",margin: "auto",fontFamily:"cursive"}}>
                <h4 className="mt-4" style = {{color:"blueViolet"}}>Sign Up</h4>
                <Form>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaUser /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="firstName"
                        placeholder="Enter Name"
                        value = {this.state.firstName}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaMobile /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="mobile"
                        placeholder="Enter Mobile Number"
                        value = {this.state.mobile}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaEnvelope /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name ="email"
                        placeholder="Email"
                        value = {this.state.email}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaGitlab /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        name ="handle"  
                        type="text"  
                        placeholder="Enter Unique Handle Starting With @" 
                        value={this.state.handle}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                <InputGroup className="mt-4 mr-sm-2">

                    <InputGroup.Prepend>
                    <InputGroup.Text> <FaQuestion /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="select" onChange={this.changeCredentialValues} name = 'status'>
                        <option value='Single' defaultValue>Single</option>
                        <option value='Married'>Married</option>
                        <option value='Dont Say'>Don't say</option>     
                    </FormControl>
                </InputGroup>
            
                <InputGroup className="mt-4 mr-sm-2">

                <InputGroup.Prepend>
                    <InputGroup.Text> <FaKey /></InputGroup.Text>
                    </InputGroup.Prepend>
                    
                    <FormControl 
                        name ="password"  
                        type="password"  
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={this.changeCredentialValues}
                    />
                </InputGroup>
                {
                    (this.state.email !== "" && this.state.password !== "" && this.state.firstName !== "" && this.state.mobile !== "")?
                    <Button type="submit" className="mt-4" variant="outline-info" onClick={this.verifyCredentials}>
                    Sign Up
                    </Button>
                    :
                    <Button type="submit" className="mt-4" variant="outline-info" onClick={this.verifyCredentials} disabled>
                    Sign Up
                    </Button>
                }

                <Button variant="link" onClick={this.displaySignInComponent} style={{marginTop : "20px",color:"blueViolet"}}>SignIn?</Button>
                </Form>
            </div>
        )
    }

    render() {
        
        if(this.state.IS_SIGN_IN === true)
            return <SignIn />
        
         if(this.state.IS_SIGN_IN === false)
            return this.displaySignUpComponent()
        
        else if(this.state.IS_LOGIN_SUCCESS === true)
            return <App />
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {

    return {

        setCurrentUser : (user) => dispatch(setCurrentUser(user))
    }
}

export default connect(null , mapDispatchToProps)(SignUp)