import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

const PlayerCard = observer(({ game, playerIndex, player }) => {
  return (
    <div style={{ border: "solid", borderWidth:3, borderColor: (game.gameOver ? (player.name == game.getWinner ? "green" : "red") : "black") , padding: 3 }}>
      <img src={player.picturePath} height={150} />
      <br />
      <p style={{ fontFamily: "Arial" }}>Name: {player.name}</p>
      <p style={{fontFamily: "Arial"}}>Points: {player.points}</p>
      <button
        hidden={!game.gameOver && game.gameStarted}
        onClick={() => game.deletePlayer(playerIndex)}
      >
        Delete
      </button>
      <br />
    </div>
  );
});

export default PlayerCard;
