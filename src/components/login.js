import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import foodlogo5 from './foodlogo1.png';
import { BASE_URL } from './constants';

const Login = (props) => {
    const { setLoginUser } = props;
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post(`${BASE_URL}/login`, user)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                console.log(user);//
                navigate("/");
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="landingLogin" >

                <div className="centerContent">

                    <div className="headingbox" >
                        <img id="cook" src={foodlogo5} alt="cookfood" />
                        <span className="foodysite">Foodysite</span>
                    </div>

                    <span className="hey">Hey! Your Recipe search ends here.</span>

                </div>

                <div className="login">
                    <h1 id="loginh1">Login</h1>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                    <div className="button" onClick={login}>Login</div>
                    <span id="areYouSpan">Are you new on Foodysite?</span>
                    <div className="button" onClick={() => navigate("/register")}>Register here</div>
                </div>

            </div>
        </>
    )
}

export default Login;