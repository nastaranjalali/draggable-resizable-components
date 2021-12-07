import React from "react";
import Paragraph from "./Paragraph";
import Picture from "./Picture";
import { useDrag } from "react-dnd";

function DraggableComponents({ id, text, url, droped }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "draggableComponnets",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="element"
      ref={drag}
      style={{
        border: isDragging ? "5px solid pink" : "0px",
        width: droped ? "100%" : "28%",
        height: droped ? "100%" : "auto",
        padding: droped ? 0 : 5,
        margin: droped ? 0 : 5,
      }}
    >
      {text ? (
        <Paragraph className="draggable" text={text} />
      ) : (
        <Picture className="draggable" url={url} />
      )}
    </div>
  );
}

export default DraggableComponents;
