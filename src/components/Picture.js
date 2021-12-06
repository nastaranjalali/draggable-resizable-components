import React from "react";
import "./Picture.styles.css";

function Picture({ url }) {
  return (
    <div className="pictureRoot">
      <img src={url} className="pic" alt="none" />
    </div>
  );
}

export default Picture;
