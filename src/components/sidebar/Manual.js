import React from 'react'
import DirectionalPad from "./DirectionalPad";
import Abilities from "./Abilities";

const Manual = () => {
    return (
        <>
        <div className="manual">
            <DirectionalPad />
            <Abilities />
        </div>
    </>
    )
    
}

export default Manual