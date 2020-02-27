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
    className="north locked"
  >N</button>
  <button
    value="w"
    onClick={e => move(dispatch, e.target.value)}
    className="west locked"
  >W</button>
  <button
    value="s"
    onClick={e => move(dispatch, e.target.value)}
    className="south locked"
  >S</button>
  <button
    value="e"
    onClick={e => move(dispatch, e.target.value)}
    className="east locked"
  >E</button>
    </div></>
)
}

export default DirectionalPad;