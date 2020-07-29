import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import logo from "../../../images/controller.png"

import "./card-2.css";

class PressA extends Component {
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
                <div className="flip-pcard-front" onClick={this.handleClick}>
                    <img src={logo}/>
                    <h4>Press A to Begin</h4>
                    <p>Using the vanacular of gaming in youth ministry</p>
                </div>

                <div className="flip-pcard-back" onClick={this.handleClick}>
                    <img src={logo}/>
                    <p>React, HTML, CSS, JavaScipt, API</p>
                    <p><a href="http://www.pressatobegin.com/">PressAToBegin.com</a> </p>
                    <p><a href="https://github.com/ReaganADavenport/press-A-to-begin">GitHub Repository</a> </p>
                </div>
            </ReactCardFlip>
        )
    }
}


export default PressA; 