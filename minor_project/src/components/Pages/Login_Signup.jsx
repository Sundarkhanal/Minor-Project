import React, { useState } from 'react';
import './Login_Signup.css';


const Login_SIgnup = () => {
    const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div> </div>:<div className="input">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder='Name' />
            </div> }

            <div className="input">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder='Password'  />
            </div>
        </div>
        {action === "Sign Up"? <div> </div>:<div className="forgot-password">Forgot Passowrd? <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action === "Login"?"submit gray" : "submit"} onClick = {() =>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action == "Sign Up"?"submit gray":"submit"} onClick = {() =>{setAction("Login")}} >Login</div>
        </div>
    </div>
  )
}

export default Login_SIgnup