import { observer } from "mobx-react-lite";

const WinnerName = observer(({ game }) => {
  return (
    <>
      <input
        hidden={!game.gameOver}
        disabled={true}
        value={"WINNER: " + game.getWinner}
      />
    </>
  );
});

export default WinnerName;
