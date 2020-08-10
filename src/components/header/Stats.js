import React from "react";
import { playerStatus, undress } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

export const Stats = () => {
  const [{ playerState, gameState }, dispatch] = useStateValue();

  return (
    <div className="stats">
      <p>
        <span className="playerName">
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
        )}
      </p>
      <p>
        {playerState.footwear ? (
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
        )}
      </p>
      <p>
        Sugar Rush (secs):{" "}
        <span className="statValue">{Math.round(playerState.sugar_rush)}</span>
      </p>
      {playerState.bodywear && (
        <button
          className="undress jacket"
          onClick={() => {
            undress(dispatch, playerState.bodywear);
            playerStatus(dispatch);
          }}
        >
          Remove
        </button>
      )}
      {playerState.footwear && (
        <button
          className="undress boots"
          onClick={() => {
            undress(dispatch, playerState.footwear);
            playerStatus(dispatch);
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Stats;
