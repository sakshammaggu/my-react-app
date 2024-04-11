import React from 'react'

const EventResponding = () => {
    const handleClick=()=>{
        alert("You Clicked me!!");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" className="btn btn-primary">Click Me</button>
        </div>
    )
}

export default EventResponding;