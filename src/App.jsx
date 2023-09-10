import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./User";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends />

      <Users />
      <Team />
      <Counter></Counter>

      <br />
      {/*  <button onClick={handleClick}>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>

      <button
        onClick={() => {
          alert("Third Clicked");
        }}>
        Third
      </button>

      <button onClick={() => addToFive(5)}>Four</button>
    </>
  );
}

export default App;
