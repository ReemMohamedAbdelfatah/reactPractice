import React from "react";
import ReactDOM from "react-dom";

const name="Reem";

ReactDOM.render(<div>
  <h1>Hello {name}!</h1>
  <p>{name}'s magic number is {Math.round(Math.random()*10)}</p>
  </div>,
 document.getElementById("root"));
