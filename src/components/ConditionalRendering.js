import React from 'react';
import IsVote from './Voting/IsVote.js';
import IsNotVote from './Voting/IsNotVote.js';

const ConditionalRendering = () => {
    const obj1={
        userName: "abc",
        userAge: 18,
        toVote: true
    };

    const obj2={
        userName: "def",
        userAge: 17,
        toVote: false
    };

    let content1, content2;

    // decision for obj1
    if (obj1.toVote)
        content1=<IsVote/>
    else
        content1=<IsNotVote/>

    // decision for obj2
    if (obj2.toVote)
        content2=<IsVote/>
    else
        content2=<IsNotVote/>
        

    return (
        <div>
            <div>
                {"Name: " + obj1.userName}
                <br />
                {"Age: "+obj1.userAge}
                <br />
                {content1}
            </div>

            <br />

            <div>
                {"Name: " + obj2.userName}
                <br />
                {"Age: "+ obj2.userAge}
                <br />
                {content2}
            </div>
            
        </div>
    )
}

export default ConditionalRendering;