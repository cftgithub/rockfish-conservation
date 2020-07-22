import React, {Component} from 'react';
import "./style.css";
import "video-react";

class Player extends Component {
    render() { 
        return (
            <video 
                id="background-video"
                loop={props.loop} 
                autoPlay={props.autoplay} 
                muted={props.muted}
                fluid={props.fluid}
                src={props.source}>
            </video>
        );
    }

};

export default Player;
