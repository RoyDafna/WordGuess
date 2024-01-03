import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

const TurnTimer = observer(({game})=>{
    let turnCountRef = useRef(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      if(game.gameStarted && !game.gameOver) {
      turnCountRef.current++;
      game.guessLetter(
        turnCountRef.current % game.players.length,
        game.letterBank.at(
          Math.floor(Math.random() * game.letterBank.length)
        ))
      }
    }, game.turnInterval);
    return () => clearInterval(intervalID);
  }, [game.turnInterval]);

  return(
    <>
    <input
        type="range"
        min={100}
        max={2000}
        step={100}
        value={game.turnInterval}
        onChange={(e) => game.setInterval(e.target.valueAsNumber)}
      />
    </>
  )
});

export default TurnTimer;