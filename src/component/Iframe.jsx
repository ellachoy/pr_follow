import React from 'react';

export default function Iframe(props) {
    const {source, loop, autostart, hidden} =this.props
    return(
        <div>
         <iframe src={source} loop={loop} autostart={autostart} hidden={hidden}/>   
        </div>
    );
}