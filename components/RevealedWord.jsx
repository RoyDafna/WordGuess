import { observer } from "mobx-react-lite";

const RevealedWord = observer(({ game }) => {
  return (
    <>
      <input
        disabled={true}
        hidden={!game.gameStarted}
        value={game.revealedWord}
      />
    </>
  );
});

export default RevealedWord;
