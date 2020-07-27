import React, {Component} from 'react';
import logo from "../../../images/controller.png"

import "./card-2.css";

const PressA = () => {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={logo}/>
                    <h4>Press A to Begin</h4>
                    <p>Using the vanacular of gaming in youth ministry</p>
                </div>

                <div className="flip-card-back">
                    <img src={logo}/>
                    <p>React, HTML, CSS, JavaScipt, API</p>
                    <p><a href="http://www.pressatobegin.com/">PressAToBegin.com</a> </p>
                    <p><a href="https://github.com/ReaganADavenport/press-A-to-begin">GitHub Repository</a> </p>
                </div>

            </div>

        </div>
    )
}


export default PressA; 