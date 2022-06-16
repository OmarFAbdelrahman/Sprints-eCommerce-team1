import React from "react";

function Loading({state}) {
  return (
    <div className={`modal is-${state}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <progress className="progress is-large is-info" max="100" />
      </div>
    </div>
  );
}

export default Loading;
