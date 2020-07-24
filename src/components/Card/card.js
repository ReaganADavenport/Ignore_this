import React, { Component } from 'react';

import "./Card.css";

class FlashCard extends Component {
    state = {
        showAnswer: false,
        input: "",
        isFlipped: false
    };

    displayDetails = () => {
        this.setState({
            showDetails: true
        })
    };

    flipCard = () => {
        this.setState({
            isFlipped:true
        })
    };

    changeInput = input => {
        const lowerCaseInput = input.toLowerCase();
        this.setState({input: lowerCaseInput});
    };

    handleClick = () => {
        const displayChange = this.displayDetails();
        const flipped = this.flipCard();
        return(
            displayChange,
            flipped
            );
    };

    render(){
        const { vocabWord } = this.props;
        const { showDetails, isFlipped } = this.state;
        return (
            <div className={ isFlipped ? 'flashcard flipped' : 'flashcard'}>
                
                    <div class="Front">
                                <p>{vocabWord.character}</p>
                                <button onClick={this.handleClick}>Submit</button>
                    </div>
                    <div class="Back">
                                {!!showDetails ?
                                    <>
                                    <p>{vocabWord.english}</p>
                                    <p>{vocabWord.pinyin}</p>
                                    </>
                                    :
                                    null
                                }
                    </div>
            
            </div>
        );
    }
};

export default FlashCard; 