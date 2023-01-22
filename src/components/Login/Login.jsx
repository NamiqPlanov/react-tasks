import { useEffect, useRef, useState } from "react";
import Button from "../button";
import styles from './Login.module.css';
import { addgmail } from "../../utils";
const initialvalue = {
    email:"",
    password:""
}



function Login(){
    
  const [input1,setinput]= useState(initialvalue)
  const EmailInput = useRef();
  const passwordInput = useRef()
  useEffect(()=>{
    alert('Welcome to login webcontent!')
},[])
useEffect(()=>{
    console.log('Input changed')
},[input1])
    return(
        <div className= {styles.form}>
            <input 
            ref = {EmailInput}
            onChange={({target})=>{
                setinput({...input1,email:target.value})
            }}
            value={input1.email} id='email' type='text' placeholder="E-mail"/>
            <input   
            ref={passwordInput} 
            onChange={({target})=>{
                setinput({...input1,password:target.value})
            }}
            value={input1.password} id="password" type='password' placeholder="Password"/>
            <Button bgcolor='blue' text='Submit' click={()=>{
                const email = document.getElementById('email')
                const password = document.getElementById('password')
                console.log(input1)
            }}/>
            <Button bgcolor='violet' text='Add @gmail.com' click={()=>{
                setinput({...input1,email:addgmail(input1.email)})
            }}/>
        </div>
    )
    
}

export default Login;