import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [auth, setAuth] = useState(false);
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const { first_name, last_name, email, username, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { first_name, last_name, email, username, password };
      console.log(body);
      const response = await fetch(
        "http://localhost:8080/auth/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      const parseResponse = await response.json();

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);

        setAuth(true);
        toast.success(
          `Welcome to the club, ${parseResponse.username
            .charAt(0)
            .toUpperCase()}${parseResponse.username.substring(1)}!`
        );
      } else {
        setAuth(false);
        toast.error(parseResponse);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          className="form-control my-3"
          type="text"
          name="first_name"
          placeholder="first name"
          value={first_name}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="text"
          name="last_name"
          placeholder="last name"
          value={last_name}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="Example@example.com"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="text"
          name="username"
          placeholder="Select Username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <Link to="/locations">
          <button className="btn btn-success btn-block ">Submit</button>
        </Link>
      </form>
      <Link to="/login">Login</Link>
    </Fragment>
  );
};
export default Register;
