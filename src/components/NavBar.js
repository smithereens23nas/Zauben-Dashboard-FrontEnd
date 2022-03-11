import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
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