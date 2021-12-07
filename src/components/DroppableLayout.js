import React from "react";
import Split, { SplitDirection } from "@devbookhq/splitter";
import { useState } from "react";
import "./DroppableLayout.styles.css";
import { useDrop } from "react-dnd";
import DraggableComponents from "./DraggableComponents";
import Board from "./Board";
function DroppableLayout({ ComponentList }) {
  // const [board, setBoard] = useState([]);
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "draggableComponnets",
  //   drop: (item) => {
  //     addComponnetToBoard(item.id, 0);
  //   },
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));
  // const [{ isOver2 }, drop2] = useDrop(() => ({
  //   accept: "draggableComponnets",
  //   drop: (item) => {
  //     addComponnetToBoard(item.id, 1);
  //   },
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));
  // const addComponnetToBoard = (id, boardNo) => {
  //   const component = ComponentList.find((element) => id === element.id);
  //   let tempboard = board;
  //   tempboard[boardNo] = component;
  //   setBoard(tempboard);
  //   console.log(board);
  // };
  return (
    <div className="droppableRoot">
      <Split
        direction={SplitDirection.Vertical}
        gutterClassName="custom-gutter-vertical"
        draggerClassName="custom-dragger-vertical"
        minHeights={[150, 150]}
      >
        <Split
          direction={SplitDirection.Horizontal}
          minWidths={[150, 150]}
          gutterClassName="custom-gutter-horizontal"
          draggerClassName="custom-dragger-horizontal"
        >
          <Board ComponentList={ComponentList} />
          <Board ComponentList={ComponentList} />
        </Split>
        <Split
          direction={SplitDirection.Horizontal}
          gutterClassName="custom-gutter-horizontal"
          draggerClassName="custom-dragger-horizontal"
          minWidths={[150, 150]}
        >
          <Board ComponentList={ComponentList} />
          <Board ComponentList={ComponentList} />
        </Split>
      </Split>
    </div>
  );
}

export default DroppableLayout;
