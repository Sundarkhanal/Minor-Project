import React, { useState } from 'react';
import './Login_Signup.css';
import { useNavigate } from 'react-router-dom';

const Login_SIgnup = () => {
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate();

    return (
        <div>
            <div className="back-button" onClick={() => navigate('/')}>
                ⬅ Back to Home
            </div>

            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    {/* action stores the state */}
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    {action === "Login" ? null : (
                        <div className="input">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name" />
                        </div>
                    )}

                    <div className="input">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="input">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Forgot Password? <span>Click Here</span>
                    </div>
                )}

                <div className="submit-container">
                    <div
                        className={action === "Login" ? "submit gray" : "submit"}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === "Sign Up" ? "submit gray" : "submit"}
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login_SIgnup;
