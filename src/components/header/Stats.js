import React from "react";
import { useStateValue } from "../../hooks/useStateValue";

export const Stats = () => {
  const [{ playerState, gameState }] = useStateValue();

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
          <span className="statValue">👕 {playerState.bodywear}</span>
        ) : (
          <><span className="gearOff">👕</span> No bodywear. </>
        )}
      </p>
      <p>
        
        {playerState.footwear ? (
          <span className="statValue">👢{playerState.footwear}</span>
        ) : (
          <><span className="gearOff">👢</span>No footwear.</>
        )}
      </p>
    </div>
  );
};

export default Stats;
