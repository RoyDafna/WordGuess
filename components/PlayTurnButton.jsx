import { observer } from "mobx-react-lite";

const PlayTurnButton = observer(({ game }) => {
  return (
    <>
      <button
        hidden={!game.gameStarted || game.gameOver}
        onClick={() => {
          for (let i = 0; i < game.players.length; i++) {
            game.guessLetter(
              i,
              game.letterBank.at(
                Math.floor(Math.random() * game.letterBank.length)
              )
            );
          }
        }}
      >
        Play Turn
      </button>
    </>
  );
});

export default PlayTurnButton;
