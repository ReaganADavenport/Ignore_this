import React,{Component} from 'react';

import './contact.css';


const Contact = () => {
    return(
        <div className="Contact">
            <h1>Contact Me</h1>
            <div className="Info">
                <p>Phone: (404) 558-9065</p>
                <p>Email: reagan.a.davenport@gmail.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/reagan-davenport/">www.linkedin.com/in/reagan-davenport</a></p>
                <p>GitHub: <a href="https://github.com/ReaganADavenport?tab=repositories" >github.com/ReaganADavenport</a> </p>
                <p>Resume: <a href="https://docs.google.com/document/d/1AUl7b6CZ7cYabz7YR0E3b9905FX-62IYjhfZuX0iq60/edit">Check it out!</a> </p>
            </div>
        </div>
    )
}

export default Contact;