import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

const StartButton = observer(({ game }) => {
  return (
    <button
      style={{ height: 50, width: 100 }}
      disabled={game.players.length < 2}
    >
      Start Game
    </button>
  );
});

export default StartButton;
