import React from 'react'

const IsNotVote = () => {
    return (
        <div>
            <div className="card" style={{backgroundColor: 'red', width: 150}}>
                <div className="card-body">
                    <h5 className="card-title">Lesser than 18</h5>
                    <p className="card-text">We can't vote.</p>
                </div>
            </div>
        </div>
    )
}

export default IsNotVote;