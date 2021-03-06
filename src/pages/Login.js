import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({setAuth}) => {
    
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const {email, password} = inputs;
    
    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});

    }; 

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {email, password};
            const response = await fetch("http://localhost:8080/auth/users/all",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );
                const parseRes = await response.json();

                if(parseRes.token) {
                    localStorage.setItem('token', parseRes.token);
                    setAuth(true);
                    toast.success(`Welcome Back, ${parseRes.username.charAt(0).toUpperCase()}${parseRes.username.substring(1,)}!`)
                } else {
                    setAuth(false);
                    toast.error(parseRes);
                }
              
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
    <Fragment>
        <h1 className="text-center my-5">Login</h1>
        <form className='forms' onSubmit={onSubmitForm}>
            <input 
                type="email" 
                name="email" 
                placeholder="you@email.com"
                className="form-control my-3"
                value={email}
                onChange={e => onChange(e)}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Enter Password"
                className="form-control my-3"
                value={password}
                onChange={e => onChange(e)}
            />
            <Link to="/locations"><button className="forms-btn">Submit</button></Link>
        </form>
        <Link to="/register">Register</Link>
    </Fragment>
 )

};

export default Login;  