import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import logo from "../../../images/candle.png"

import "./card-4.css";

class Candle extends Component {
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
                        <div className="flip-ccard-front" onClick={this.handleClick}>
                            <img src={logo}/>
                            <h5>Candle Ministry</h5>
                            <p>Use e-commerce to purchase beeswax candles from a Greek Orthodox retreat center</p>
                        </div>

                        <div className="flip-ccard-back" onClick={this.handleClick}>
                            <>
                                <img src={logo}/>
                                <p>WordPress, e-commerce, UPS API, Plug-ins</p> /*Insanity management */
                                <p><a href="https://thediakoniaretreatcenter.com/candle-ministry-2/">thediakoniaretreatcenter.com</a> </p>
                            </>
                        </div>
            </ReactCardFlip>
        )
    }
}


export default Candle; 