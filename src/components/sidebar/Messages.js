import React, { useEffect } from "react";
import { useStateValue } from "../../hooks/useStateValue";

const Messages = () => {
  const [{ gameState }] = useStateValue();

  // console.log("gameState path: ", gameState.path);
  // console.log("gameState log: ", gameState.actionLog);

  useEffect(() => {
    // const updateScroll = () => {
    let objDiv = document.querySelector(".messages");
    objDiv.scrollTop = objDiv.scrollHeight;
    // };
    // return updateScroll();
  }, [gameState]);

  return (
    <>
      <div className="messages">
        {gameState.actionLog.map((action, i) => {
          if (i === gameState.actionLog.length - 1) {
            return action.messages.map((message, index) => {
              return (
                <p key={index} className="currentAction">
                  {message}
                </p>
              );
            });
          } else {
            return action.messages.map((message, index) => {
              return (
                <p key={index} className="oldAction">
                  {message}
                </p>
              );
            });
          }
        })}
      </div>
    </>
  );
};

export default Messages;
