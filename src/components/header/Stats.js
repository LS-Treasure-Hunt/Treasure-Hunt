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
          <span role="img" aria-label="emoji" className="statValue">👕 {playerState.bodywear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👕</span> No bodywear. </>
        )}
      </p>
      <p>
        
        {playerState.footwear ? (
          <span role="img" aria-label="emoji" className="statValue">👢{playerState.footwear}</span>
        ) : (
          <><span role="img" aria-label="emoji" className="gearOff">👢</span>No footwear.</>
        )}
      </p>
      <p className="statusButton" onClick={() => playerStatus(dispatch)} >Get Status</p>
    </div>
  );
};

export default Stats;
