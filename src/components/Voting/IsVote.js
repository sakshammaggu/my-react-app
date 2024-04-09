import React from 'react'

const IsVote = () => {
    return (
        <div>
            <div className="card" style={{backgroundColor: 'green', width: 150}}>
                <div className="card-body">
                    <h5 className="card-title">Greater than 18</h5>
                    <p className="card-text">We can vote.</p>
                </div>
            </div>
        </div>
    )
}

export default IsVote;