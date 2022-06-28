import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import foodlogo5 from './foodlogo1.png';
import { BASE_URL } from './constants';

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    };

    const register = async(event) => {
        event.preventDefault();
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post(`${BASE_URL}/register`, user)
                .then(res => {
                    alert("Successfully Registered, Please login now.");
                    navigate("/login");
                })
        } else {
            alert("invlid input");
        }

    };

    return (
        <>
            <div className="landingRegister" >

                <div className="centerContent">

                    <div className="headingbox" >
                        <img id="cook" src={foodlogo5} alt="cookfood" />
                        <span className="foodysite">Foodysite</span>
                    </div>

                    <span className="hey">Hey! Your Recipe search ends here.</span>

                </div>

                <div className="register">
                    {console.log("User", user)}
                    <h1 id="registerh1">Register</h1>
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                    <div className="button" onClick={register} >Register</div>
                    <span id="alreadySpan">Already registered?</span>
                    <div className="button" onClick={() => navigate("/login")}>Login</div>
                </div>

            </div>
        </>


    )
}

export default Register;