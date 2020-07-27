import React, {Component} from 'react';
import logo from "../../../images/wu.png"

import "./card-1.css";

const Mandarin = () => {
    return(
        <div className="flip-mcard">
            <div className="flip-mcard-inner">
                <div className="flip-mcard-front">
                    <img src={logo}/>
                    <h4>Learn Mandarin</h4>
                    <p>Learn how to read and write in Mandarin Chinese</p>
                </div>

                <div className="flip-mcard-back">
                    <img src={logo}/>
                    <p>React, Express, HTML, CSS, JavaScipt, PosgreSQL</p>
                    <p>Demo Video</p>
                    <p><a href="https://github.com/ReaganADavenport/learn-mandarin-client">GitHub - Frontend</a> </p>
                    <p><a href="https://github.com/ReaganADavenport/learn-mandarin-api">GitHub Backend</a> </p>
                </div>

            </div>

        </div>
    )
}


export default Mandarin; 