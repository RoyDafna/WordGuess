import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

const TurnTimer = observer(({ game }) => {
  let turnCountRef = useRef(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (game.gameStarted && !game.gameOver) {
        turnCountRef.current++;
        game.guessLetter(
          turnCountRef.current % game.players.length,
          game.letterBank.at(Math.floor(Math.random() * game.letterBank.length))
        );
      }
    }, game.turnInterval);
    return () => clearInterval(intervalID);
  }, [game.turnInterval]);

  return (
    <>
      <label
        style={{ fontFamily: "Arial" }}
        hidden={!game.gameStarted || game.gameOver}
      >
        Turn Interval: {game.turnInterval} ms
      </label>{" "}
      <br />
      <input
        hidden={!game.gameStarted || game.gameOver}
        type="range"
        min={100}
        max={2000}
        step={100}
        value={game.turnInterval}
        onChange={(e) => game.setInterval(e.target.valueAsNumber)}
      />
    </>
  );
});

export default TurnTimer;
