import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

import html from "../../images/skills/html.png"
import css from "../../images/skills/css.png"
import javascript from "../../images/skills/javascript.png"
import linux from "../../images/skills/linux.png"
import node_js from "../../images/skills/node-js.png"
import postgresql from "../../images/skills/postgre-sql.png"
import python from "../../images/skills/python.png"
import react from "../../images/skills/react.png"
import ruby from "../../images/skills/ruby.png"
import swift from "../../images/skills/swift.png"

import Mandarin from "../Card/Card-1/card-1";
import PressA from "../Card/Card-2/card-2";
import Adventure from "../Card/Card-3/card-3";
import Dog from "../Card/Card-4/card-4";

const Home = () => {
    return(
        <div className="Home">
            <div className="Greeting">
                <h1>Hi! I'm Reagan Davenport</h1>
                <h4>A Full-Stack Developer</h4>
            </div>

            <div className="Content">
                <div className="MyWork">
                    <h4>Projects</h4>
                    <div className="Works">
                        <Mandarin/>
                        <PressA/>
                        <Adventure/>
                        <Dog/>
                    </div>
                </div>

                <div className="WhatIKnow">
                    <h4>Skills</h4>
                    <img src={html}/>
                    <img src={css}/>
                    <img src={javascript}/>
                    <img src={linux}/>
                    <img src={node_js}/>
                    <img src={postgresql}/>
                    <img src={python}/>
                    <img src={react}/>
                    <img src={ruby}/>
                    <img src={swift}/>
                </div>

            </div>
        </div>
    )
}

export default Home;