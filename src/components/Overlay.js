import React from "react";

const Overlay = () => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <p>
          The Treasure Hunt server responded with a cooldown. Please wait...
        </p>
        <p className="modalSidenote">
          (Yup, waiting on these cooldowns can get annoying. Did we mention this
          was a competition? ☺️)
        </p>
      </div>
    </div>
  );
};

export default Overlay;
