import React, {Component} from 'react';
import logo from "../../images/wu.png"

import "./card.css";

const Mandarin = () => {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={logo}/>
                    <h4>Learn Mandarin</h4>
                    <p>Learn how to read and write in Mandarin Chinese</p>
                </div>

                <div className="flip-card-back">
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