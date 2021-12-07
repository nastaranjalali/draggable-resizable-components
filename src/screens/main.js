import React from "react";
import DroppableLayout from "../components/DroppableLayout";
import "./main.styles.css";
import pic1 from "../assets/backpack-1.jpg";
import pic2 from "../assets/camera-1.jpg";
import pic3 from "../assets/controler-1.jpg";
import DraggableComponents from "../components/DraggableComponents";

function Main() {
  const initialValues = [
    {
      id: 1,
      text: "Lorem ipsum dLorem ipsum dolor situcndimentum ac, luctus pulvinar velit. Cras et ligestibulum mauris ",
      url: "",
    },
    {
      id: 2,
      text: "",
      url: pic1,
    },
    {
      id: 3,
      text: "Lorem ipsum dLorem ipsum dolor situcndimentum ac,  ",
      url: "",
    },
    {
      id: 4,
      text: "",
      url: pic2,
    },
    {
      id: 5,
      text: "Lorem ipsum dLorem ipsum dolor situcndimentum ac, ipsum dolor situcndimentum ac, luctus pulvinar velit. Cras et ligestibul luctus pulvinar velit. Cras et ligestibulum mauris ",
      url: "",
    },
    {
      id: 6,
      text: "",
      url: pic3,
    },
  ];

  return (
    <div className="mainRoot">
      <div className="droppableContainer">
        <DroppableLayout className="layout" ComponentList={initialValues} />
      </div>
      <div className="draggabeContainer">
        {initialValues.map((element, index) => {
          return (
            <DraggableComponents
              key={index}
              id={element.id}
              url={element.url}
              text={element.text}
              droped={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
