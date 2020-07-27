import React, {Component} from 'react';
import logo from "../../../images/wizard_hat.png"

import "./card-3.css";

const Adventure = () => {
    return(
        <div className="flip-acard">
            <div className="flip-acard-inner">
                <div className="flip-acard-front">
                    <img src={logo}/>
                    <h4>Python Text-Based Adventure</h4>
                    <p>Travel through the land and save the people from the evil wizard.</p>
                </div>

                <div className="flip-acard-back">
                    <img src={logo}/>
                    <p>Python, OOP</p>
                    <p>Demo Video</p>
                    <p><a href="https://github.com/ReaganADavenport/My_game">GitHub Repository</a> </p>
                </div>

            </div>

        </div>
    )
}


export default Adventure; 