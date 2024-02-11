import React from "react";
import ActionButton from "./components/ActionButton";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <>
      <GameBoard />
      <ActionButton action="hit" />
      <ActionButton action="stand" />
      <ActionButton action="surrender" />
    </>
  );
};

export default App;
