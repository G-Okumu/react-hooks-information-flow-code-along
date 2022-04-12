import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const[childColor, setChildColor] = useState("blue");

  function handleChangeColor(newChildColor){
    let newColor = getRandomColor();
    setColor(newColor);
    setChildColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child childColor={childColor} onChangeColor={handleChangeColor}/>
      <Child childColor={childColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
