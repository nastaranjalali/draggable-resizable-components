import React from "react";
import DroppableLayout from "../components/DroppableLayout";
import Paragraph from "../components/Paragraph";
import Picture from "../components/Picture";
import "./main.styles.css";
import pic1 from "../assets/backpack-1.jpg";
import pic2 from "../assets/camera-1.jpg";
import pic3 from "../assets/controler-1.jpg";

function Main() {
  return (
    <div className="mainRoot">
      <div className="droppableContainer">
        <DroppableLayout className="layout" />
      </div>
      <div className="draggabeContainer">
        <div className="element">
          <Paragraph
            className="draggable"
            text={
              "Lorem ipsum dolor sit amet,  vulputate sed quam eu, cursus faucibus elit. Maecenas tortor massa, laoreet vitae condimentum ac, luctus pulvinar velit. Cras et lig"
            }
          />
        </div>
        <div className="element">
          <Picture className="draggable" url={pic1} />
        </div>

        <div className="element">
          <Paragraph
            className="draggable"
            text={"Lorem ipsum dolor sit aasfdasc gfrdg erlit. Cras et lig"}
          />
        </div>
        <div className="element">
          <Picture className="draggable" url={pic2} />
        </div>
        <div className="element">
          <Paragraph
            className="draggable"
            text={
              "Lorem ipsum dLorem ipsum dolor situcndimentum ac, luctus pulvinar velit. Cras et ligestibulum mauris sem, vulputate sed quam eu, cursus faucibus elit. Maecenas tortor massa, laoreet vitae condimentum ac, luctus pulvinar velit. Cras et lig"
            }
          />
        </div>
        <div className="element">
          <Picture className="draggable" url={pic3} />
        </div>
      </div>
    </div>
  );
}

export default Main;
