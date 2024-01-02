import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

const PlayerCard = observer(({ game, playerIndex, player }) => {
  return (
    <div>
      <img src={player.picturePath} height={150} />
      <br />
      <input disabled={true} value={player.name} />
      <button disabled={!game.gameOver && game.gameStarted} onClick={() => game.deletePlayer(playerIndex)}>Delete</button>
      <br />
      <input disabled={true} value={"Points: " + player.points} />
    </div>
  );
});

export default PlayerCard;
