import React, { useState } from "react";

function Toggle() {
  const [btnToggle, setToggle] = useState(false)
  function changeBtn(){
    setToggle((btnToggle) => !btnToggle)
  }

 const btnColor = btnToggle ? "red" : "white";

  return <button onClick={changeBtn} style={{background: btnColor}}>{btnToggle ? "ON" : "OFF"}</button>;
}

export default Toggle;
