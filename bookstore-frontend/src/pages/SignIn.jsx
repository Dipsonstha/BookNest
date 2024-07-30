import React, { useState } from 'react';
import '../Css/LogIn.css';
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const SignIn = () => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    const postForm = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user); // For testing purposes, log the user data
        // You can add form submission logic here
    };

    return (
        <div className="login-container">
            <div className="login">
                <div className="login-title">
                    <h3>Welcome to BookNest! Please login.</h3>
                    <div className="login-other">New member? <a href="register" className='link'>Register</a> here.</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mod-login">
                        <div className="mod-login-col1">
                            <div className="mod-input mod-input-login">
                                <label htmlFor="username">Phone Number or Email</label>
                                <input
                                    id="username"
                                    name="name"
                                    type="text"
                                    placeholder="Please enter your Phone Number or Email"
                                    value={user.name}
                                    onChange={postForm}
                                    required
                                />
                            </div>
                            <br />
                            <div className="mod-input mod-input-password">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Please enter your password"
                                    value={user.password}
                                    onChange={postForm}
                                    required
                                />
                            </div>
                            <div className="mod-login-forgot">
                                <a href="#" className='link'>Forgot your password?</a>
                            </div>
                        </div>
                        <div className="mod-login-col2">
                            <div className="mod-login-btn">
                                <button type="submit" className="mod-button login-btn">LOGIN</button>
                            </div>
                            <div className="mod-third-party-login">
                                <span>Or, login with</span>
                                <div className="mod-third-party-login-bd">
                                    <button className="mod-button mod-third-party-login-fb"><FaFacebookF className='d-inline'/>Facebook</button>
                                    <button className="mod-button mod-third-party-login-google"><FaGooglePlusG className='d-inline'/>Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
