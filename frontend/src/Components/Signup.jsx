import React ,{useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
const Signup = () => {

    const [email, setEmail] =useState("");
    const [password,setPassword]  = useState("");
    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:1000/signup",{
                email,password
            })
        }
        catch(e) {
            console.log("the Erroer is  :",e);
        }
    }


    return (
        <div>
            <h1>Sign up </h1>
            <form action="post">
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" /> <br />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" /> <br></br>
                <input type="submit" value="submit" onClick={submit} />

            </form>
            <p>OR</p>
            <Link to="/" >Login</Link>




        </div>
    )
}

export default Signup