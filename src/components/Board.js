import React from "react";
import { useState } from "react";
import "./DroppableLayout.styles.css";
import { useDrop } from "react-dnd";
import DraggableComponents from "./DraggableComponents";
function Board({ ComponentList }) {
  const [board, setBoard] = useState();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "draggableComponnets",
    drop: (item) => {
      addComponnetToBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addComponnetToBoard = (id) => {
    const component = ComponentList.find((element) => id === element.id);

    setBoard(component);
    console.log(board);
  };
  return (
    <div className="cover" ref={drop}>
      {board ? (
        <DraggableComponents
          id={board.id}
          url={board.url}
          text={board.text}
          droped
        />
      ) : null}
    </div>
  );
}

export default Board;
