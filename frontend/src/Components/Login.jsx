import React from 'react'
import {useState} from 'react';
import {useNavigate,Link ,Navigate} from "react-router-dom";
import axios from 'axios';



const Login = () => {
    const [email, setEmail] =useState("");
    const [password,setPassword]  = useState("");
    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:1000/",{
                email,password
            })
        }
        catch(e) {
            console.log("the Erroer is  :",e);
        }
    }






  return (
    <div>
        <h1>Login </h1>
        <form action = "post">
            <input type="email" value = {email} onChange = {(e) => {setEmail(e.target.value)}}    placeholder = "Enter your email" /> <br />
            <input type="password"  value = {password} onChange = {(e) => {setPassword(e.target.value)}} placeholder = "Enter your password" /> <br></br>
            <input type="submit" value = "submit" onClick = {submit}/>

        </form>
        <p>OR</p>
        <Link to ="/signup" >Sign up</Link>

    </div>
  )
}

export default Login