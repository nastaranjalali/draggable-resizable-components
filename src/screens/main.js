import React from "react";
import DroppableLayout from "../components/DroppableLayout";
import Paragraph from "../components/Paragraph";
import Picture from "../components/Picture";
import "./main.styles.css";
function Main() {
  return (
    <div className="mainRoot">
      <div className="droppableContainer">
        <DroppableLayout className="layout" />
      </div>
      <div className="draggabeContainer">
        <Paragraph className="draggable" />
        <Picture className="draggable" />
        <Paragraph className="draggable" />
        <Picture className="draggable" />
        <Paragraph className="draggable" />
        <Picture className="draggable" />
      </div>
    </div>
  );
}

export default Main;
