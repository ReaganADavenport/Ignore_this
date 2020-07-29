import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import logo from "../../../images/wizard_hat.png"

import "./card-3.css";

class Adventure extends Component {
    constructor() {
        super();
            this.state = {
                isFlipped: false
            };

            this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render(){
        return(
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div className="flip-acard-front" onClick={this.handleClick}>
                    <img src={logo}/>
                    <h5>Python Text-Based Adventure</h5>
                    <p>Travel through the land and save the people from the evil wizard.</p>
                </div>

                <div className="flip-acard-back" onClick={this.handleClick}>
                    <img src={logo}/>
                    <p>Python, OOP</p>
                    <p>Demo Video</p>
                    <p><a href="https://github.com/ReaganADavenport/My_game">GitHub Repository</a> </p>
                </div>
            </ReactCardFlip>
        )
    }
}


export default Adventure; 