import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/register">
                <div>Sign Up</div>
            </Link>
            <Link to="/login">
                <div>Login</div>
            </Link>
            <Link to="/locations">
                <div>Locations</div>
            </Link>
            <Link to="/plants">
                <div>Plants</div>
            </Link>
        </div>
    );
};

export default Nav;