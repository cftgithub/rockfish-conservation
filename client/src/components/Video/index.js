import React, {Component} from 'react';

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: "https://www.pexels.com/video/bird-s-eye-view-of-ocean-waves-1918465/"
        }
    }

    render () {
        return (
            <video id="background-video" loop="loop" autoPlay="autoplay" muted>
                <source src={this.state.videoURL} type="video/mp4" />
            </video>
        )
    }
};

export default Video;
