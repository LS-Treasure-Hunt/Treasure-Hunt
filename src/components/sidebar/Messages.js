import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";

const Messages = () => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [{ gameState, playerState }] = useStateValue();

    return (
        <>
        <div className="messages">
            <p>Current message would go here.{currentMessage}</p>
        </div>
    </>
    )
    
}

export default Messages;