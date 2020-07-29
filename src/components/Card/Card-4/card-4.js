import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import logo from "../../../images/dog.png"

import "./card-4.css";

class Dog extends Component {
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
                        <div className="flip-dcard-front" onClick={this.handleClick}>
                            <img src={logo}/>
                            <h5>Traveling Tails</h5>
                            <p>Use Google Maps to find pet-friendly hotels, restaurants, parks, vets, and pet-supply stores.</p>
                        </div>

                        <div className="flip-dcard-back" onClick={this.handleClick}>
                            <>
                                <img src={logo}/>
                                <p>HTML, CSS, JavaScript, Google Maps API</p>
                                <p>Demo Video</p>
                                <p><a href="https://github.com/ReaganADavenport/Traveling-Tails-2">GitHub Repository</a> </p>
                            </>
                        </div>
            </ReactCardFlip>
        )
    }
}


export default Dog; 