import React, { useState } from 'react'
import '../Css/LogIn.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
const SignUp = () => {
    const [user,setUser] = useState({
        fullname:"",
        phonenumber:"",
        passoword:""
    })
    const getData =(e)=>{
        const {name,value}  = e.target
        setUser({
           ...user,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
  return (
 <>
  <div className="login-container" id='container'>
        <div className="login">
            <div className="login-title"><h3>Create your BookNest Account</h3>
        <div className="login-other">Already member? <a href="login" className='link'>Login</a> here.</div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="mod-login">
                <div className="mod-login-col1">
                    <div className="mod-input mod-input-login">
                        <label htmlFor="">Phone Number</label>
                        <input onChange={getData} name='phonenumber' type="text" placeholder="Please enter your Phone Number" data-meta="Field" />
                    </div>
                    {/* <span class="mod-login-change-sms-type">Get code via other methods </span> */}
                    <div className="mod-input mod-input-password">
                        <label htmlFor="">Password</label>
                        <input onChange={getData} name='passoword' type="password" placeholder="Please enter your password" data-meta="Field" ></input>
                    </div>
                    <div className="mod-login-forgot">
                        <a href="#" className='link'>Forgot your password?</a>
                    </div>
                </div>
                <div className="mod-login-col2">
                <div className="mod-input mod-input-full-name">
                        <label htmlFor="">Full name</label>
                        <input onChange={getData} name='fullname' type="text" placeholder="Enter your first and last name" data-meta="Field" ></input>
                    </div>
                    <div className="mod-login-btn">
                    <button type="submit" className="mod-button signup-btn">SIGN UP</button>
                    {/* <div>
                        <span>By clicking "SIGN UP", I agree to Dokan's <a href="" className='link'>Terms of Use</a> and <a href="" className='link'>Privacy Policy</a></span>
                    </div> */}
                    </div>
                    {/* <div className="mod-third-party-login">
                        <span>Or, sign up with</span>
                        <div class="mod-third-party-signup-bd"><button class="mod-button-signup mod-third-party-login-fb"><FaFacebookF className='d-inline'/>Facebook</button><button class="mod-button-signup mod-third-party-login-google"><FaGooglePlusG className='d-inline' />Google</button></div>
                    </div> */}
                </div>
            </div>
        </form>
        </div>
        </div>
 </>
  )
}

export default SignUp