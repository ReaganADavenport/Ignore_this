import React,{Component} from 'react';

import './tasks_demo.css';

import video from '../../videos/Tasks_demo.mp4'


const Tasks_Demo = () => {
    return(
        <div className="Video">
            <h1>Tasks Demo</h1>
            <video controls>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Tasks_Demo;