import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import logo from "../../../images/to-do-list.png"

import "./card-3.css";

class Tasks extends Component {
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
                <div className="flip-tcard-front" onClick={this.handleClick}>
                    <img src={logo}/>
                    <h5>Mobile To-Do List</h5>
                    <p>Keep track of everything you have to do while on the go</p>
                </div>

                <div className="flip-tcard-back" onClick={this.handleClick}>
                    <img src={logo}/>
                    <p>Swift, XCode</p>
                    <Link to="/tasks/demo">Demo Video</Link>
                    <p><a href="https://github.com/ReaganADavenport/To-Do_Mobile">GitHub Repository</a> </p>
                </div>
            </ReactCardFlip>
        )
    }
}


export default Tasks; 