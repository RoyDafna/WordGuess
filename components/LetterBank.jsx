import { observer } from "mobx-react-lite";

const LetterBank = observer(({ game }) => {
  return (
    <>
      <input
        disabled={true}
        hidden={!game.gameStarted}
        value={game.getLetterBank}
        style={{width: 420}}
      />
    </>
  );
});

export default LetterBank;
