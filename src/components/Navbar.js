import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <div className='Navbar'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/write'>Write a post</Link>
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' 
                alt="Just some pic"></img>
        </div>
    )
}

export default Navbar