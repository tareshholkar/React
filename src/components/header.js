import React from "react";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <div class="container">           
            <nav class="navbar navbar-default">
                <div class="container-fluid">                   
                    <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/details">Register Details</NavLink></li>                
                    </ul>              
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;