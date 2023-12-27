import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

const PlayerCard = observer(({ game, playerIndex, player }) => {
    console.log("Player")
  return (
    <div>
      <img src={player.picturePath} height={200} />
      <br />
      <input disabled={true} value={player.name} />
      <button onClick={() => game.deletePlayer(playerIndex)}>Delete</button>
    </div>
  );
});

export default PlayerCard;
