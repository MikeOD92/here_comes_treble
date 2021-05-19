import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';
import {FaArrowAltCircleLeft} from 'react-icons/fa'; 

export default function Top({user, handleLogOut}){
    return(
        <div className="nav">
            <div className="navBack">
                <FaArrowAltCircleLeft className="backBtn"/>
                <h2> New Song</h2>
            </div>
            <Link to="/" className="navLogo">
            <img src="https://img.freepik.com/free-vector/note-music-logo-design_93835-645.jpg?size=338&ext=jpg" />
            </Link> 

            <div className="userLogin">
            {user ? <><div>Hi {user.name}</div><button onClick={handleLogOut} >  Log Out </button></>:<Link to="/login">Login</Link>}
            </div>
        </div>
    )
}