import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayersList = observer(({ game }) => {
  return (
    <div>
      {game.players.map((player, playerIndex) => (
        <div style={{ display: "inline-block" }}>
          <PlayerCard
            key={playerIndex}
            game={game}
            playerIndex={playerIndex}
            player={player}
          ></PlayerCard>
        </div>
      ))}
    </div>
  );
});

export default PlayersList;
