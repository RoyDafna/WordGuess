import { observer } from "mobx-react-lite";

const RevealedWord = observer(({ game }) => {
  return (
    <>
      <h3
        hidden={!game.gameStarted}
        value={game.revealedWord}
        style={{ fontFamily: "Arial" }}
      >
        WORD: {game.revealedWord}
      </h3>
    </>
  );
});

export default RevealedWord;
