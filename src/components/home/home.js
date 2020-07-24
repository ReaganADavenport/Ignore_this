import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

import mandarin_card from "../Card/card-1";

const Home = () => {
    return(
        <div className="Home">
            <div className="Greeting">
                <h1>Hi! I'm Reagan Davenport</h1>
                <h4>A Full-Stack Developer</h4>
            </div>

            <div className="Content">
                <div className="MyWork">
                    <h4>Stuff I've Made</h4>
                    
                </div>

                <div className="WhatIKnow">
                    <h4>Stuff I Know</h4>
                </div>

            </div>
        </div>
    )
}

export default Home;