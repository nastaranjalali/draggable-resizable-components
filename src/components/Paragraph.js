import React from "react";

function Paragraph({ text }) {
  return (
    <div className="paragraphRoot">
      <p className="text">{text}</p>
    </div>
  );
}

export default Paragraph;
