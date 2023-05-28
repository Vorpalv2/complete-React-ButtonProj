import React, { useState } from "react";

function App() {
  const [Text, SetText] = useState(``);
  const [NewText, SetNewText] = useState(Text);
  const [isOver, SetisOver] = useState(false);

  const SetFunction = (event) => {
    SetText(event.target.value);
  };

  return (
    <div className="container">
      <h1>Hello,{NewText}</h1>
      <input
        onChange={SetFunction}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={
          isOver === true
            ? { backgroundColor: "white" }
            : { backgroundColor: "black" }
        }
        onClick={() => {
          SetNewText(Text);
        }}
        onMouseOver={() => {
          SetisOver(true);
        }}
        onMouseOut={() => {
          SetisOver(false);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
