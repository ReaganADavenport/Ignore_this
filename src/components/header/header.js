import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <>
                <div className="navBar">
                    <div className="container1">
                    </div>
                    <LinkStyles>
                        {/* <img src={logo}></img> */}
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/about'><b>About Me</b></Link>
                        <Link to='/contact'><b>Contact</b></Link>
                    </LinkStyles>
                </div>
            </>
    )
};

export default Header;