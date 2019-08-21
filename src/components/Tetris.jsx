import React, { useState } from "react";

//custom hooks

import { usePlayer } from "../hooks/usePlayer";
import { usestage } from "../hooks/useStage";

//Styles
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () => {
  //custom hooks for droptime and gameover

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  //hooks from imports

  const [player] = usePlayer();
 
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
