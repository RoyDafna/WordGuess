import { observer } from "mobx-react-lite";

const StartButton = observer(({ game }) => {
  return (
    <button
      style={{ height: 50, width: 100 }}
      disabled={game.players.length < 2}
      onClick={game.startGame}
      hidden={game.gameStarted && !game.gameOver}
    >
      Start Game
    </button>
  );
});

export default StartButton;
