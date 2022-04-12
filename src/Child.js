import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childColor }) {
  function changeMe(){
    let colorTobePassed = getRandomColor();
    onChangeColor(colorTobePassed);
  }
  return <div className="child" onClick={changeMe} style={{ backgroundColor: childColor }} />;
}

export default Child;
