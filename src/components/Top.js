import React from 'react'
import { Link } from 'react-router-dom'

export default function Top({user, handleLogOut}){
    return(
        <div className="nav">
            This will be the navigation bar
            {user ? <><div>hi {user.name}</div><button onClick={handleLogOut}>  Logout </button></>:<Link to="/login">login</Link>}

        </div>
    )
}