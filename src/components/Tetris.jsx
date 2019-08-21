import React from "react";

import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

import { createStage } from "../helpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;
