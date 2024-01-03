import { observer } from "mobx-react-lite";

const LetterBank = observer(({ game }) => {
  return (
    <>
      <h4 hidden={!game.gameStarted} style={{fontFamily:"Arial"}}>LETTERS: {game.getLetterBank}</h4>
    </>
  );
});

export default LetterBank;
