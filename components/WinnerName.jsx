import { observer } from "mobx-react-lite";

const WinnerName = observer(({ game }) => {
  return (
    <>
      <h2 hidden={!game.gameOver} style={{fontFamily: "Arial"}}>WINNER: {game.getWinner}</h2>
    </>
  );
});

export default WinnerName;
