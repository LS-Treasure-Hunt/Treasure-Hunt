import React from "react";
import { playerStatus } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

export const Stats = () => {
  const [{ playerState, gameState }, dispatch] = useStateValue();

  return (
    <div className="stats">
      <p>
        <span className="statValue">
          {playerState.name ? playerState.name : "Unnamed soul"}
        </span>
      </p>
      <p>
        Strength: <span className="statValue">{playerState.strength}</span>
      </p>
      <p>
        Speed: <span className="statValue">{playerState.speed}</span>
      </p>

      <p>
        Gold: <span className="statValue">{playerState.gold}</span>
      </p>
      <p>
        Coins: <span className="statValue">{gameState.coins}</span>
      </p>
      <p>
        Snitches: <span className="statValue">{playerState.snitches}</span>
      </p>

      <p>
        Encumbrance:{" "}
        <span
          className={playerState.encumbrance !== 0 ? "statDanger" : "statValue"}
        >
          {playerState.encumbrance}
        </span>
      </p>
      <p>
        {playerState.bodywear ? (
<<<<<<< HEAD
<<<<<<< HEAD
          <span role="img" aria-label="emoji" className="statValue">👕 {playerState.bodywear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👕</span> No bodywear. </>
=======
          <span className="statValue" role="img" aria-label="bodywear">
            👕 {playerState.bodywear}
          </span>
        ) : (
          <>
            <span className="gearOff" role="img" aria-label="bodywear">
              👕
            </span>{" "}
            No bodywear.{" "}
          </>
>>>>>>> 947ecca76c633bf06083551dbb6ccb1ff31939a2
=======
          <span role="img" aria-label="emoji" className="statValue">👕 {playerState.bodywear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👕</span> No bodywear. </>
>>>>>>> d4925abd2cd077383138c6956d5d5c64830318a9
        )}
      </p>
      <p>
        {playerState.footwear ? (
<<<<<<< HEAD
<<<<<<< HEAD
          <span role="img" aria-label="emoji" className="statValue">👢{playerState.footwear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👢</span>No footwear.</>
=======
          <span className="statValue" role="img" aria-label="footwear">
            👢{playerState.footwear}
          </span>
        ) : (
          <>
            <span className="gearOff" role="img" aria-label="footwear">
              👢
            </span>
            No footwear.
          </>
>>>>>>> 947ecca76c633bf06083551dbb6ccb1ff31939a2
=======
          <span role="img" aria-label="emoji" className="statValue">👢{playerState.footwear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👢</span>No footwear.</>
>>>>>>> d4925abd2cd077383138c6956d5d5c64830318a9
        )}
      </p>
      <div className="statusButton" onClick={() => playerStatus(dispatch)} >Get Status</div>
    </div>
  );
};

export default Stats;
