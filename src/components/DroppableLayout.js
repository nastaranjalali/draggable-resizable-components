import React from "react";
import Split, { SplitDirection } from "@devbookhq/splitter";
import "./DroppableLayout.styles.css";
function DroppableLayout() {
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
          <div>Tile 1</div>
          <div>Tile 2</div>
        </Split>
        <Split
          direction={SplitDirection.Horizontal}
          gutterClassName="custom-gutter-horizontal"
          draggerClassName="custom-dragger-horizontal"
          minWidths={[150, 150]}
        >
          <div>Tile 3</div>
          <div>Tile 4</div>
        </Split>
      </Split>
    </div>
  );
}

export default DroppableLayout;
