import React from "react";
import {Link} from 'react-router-dom'
import './Header.css';
const Header = () => {
    return(
        <header className='header'>
            <nav>
                <h2>Vivekanand  College</h2>
                <Link to="/home"><b>Home</b></Link>
                <Link to="/aboutpage"><b>About</b></Link>
                <Link to="/coursespage"><b>Courses</b></Link>
                <Link to="/contactpage"><b>Contact</b></Link>
                <button><Link to="/admissionspage">Apply Now!</Link></button>
            </nav>
        </header>
    )
}
export default Header;