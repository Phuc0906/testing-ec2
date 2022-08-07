import React from "react";
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link to={"/"} className="navbar-brand mb-0 h1">Question 1</Link>
                <Link to={"/new-project"} className="btn btn-outline-success" >Add Project</Link>
            </nav>
        </div>
    )
}