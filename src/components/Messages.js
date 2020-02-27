import React from "react";
import { useStateValue } from "../hooks/useStateValue";

const Messages = () => {
    const [{ gameState, playerState }] = useStateValue();

    return (
        <>
        <div className="messages">
            <h1>Messages: </h1>
            <p>Not available until we consider state.</p>
        </div>
    </>
    )
    
}

export default Messages;