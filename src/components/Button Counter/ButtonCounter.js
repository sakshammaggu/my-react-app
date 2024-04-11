import React from 'react'
import { useState } from 'react';   // using useState hooks

const ButtonCounter = () => {
    const [buttonCount, setButtonCount]=useState(0);
    const buttonCounter=()=>{
        setButtonCount(buttonCount+1);
    }

    return (
        <div>
            <button onClick={buttonCounter} type="button" className="btn btn-primary">Clicked {buttonCount} Times</button>
        </div>
    )
}

export default ButtonCounter;