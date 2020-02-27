import React from "react";
import { move } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

const DirectionalPad = () => {
const [, dispatch] = useStateValue();
return(
    <>
    <div className="mode">
    <button
    value="n"
    onClick={e => move(dispatch, e.target.value)}
    className="north"
  >N</button>
  <button
    value="w"
    onClick={e => move(dispatch, e.target.value)}
    className="west"
  >W</button>
  <button
    value="s"
    onClick={e => move(dispatch, e.target.value)}
    className="south"
  >S</button>
  <button
    value="e"
    onClick={e => move(dispatch, e.target.value)}
    className="east"
  >E</button>
    </div></>
)
}

export default DirectionalPad;