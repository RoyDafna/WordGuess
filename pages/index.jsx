import AddPlayer from "../components/AddPlayer";
import PlayerCard from "../components/PlayerCard";
import PlayersList from "../components/PlayersList";
import StartButton from "../components/StartButton";
import { GameState } from "../states/GameState";
export default function App() {
  const game = new GameState();
  console.log(game.players);
  return (
    <>
      <AddPlayer game={game}></AddPlayer> <br />
      <StartButton game={game}></StartButton>
      <br />
      <br />
      <PlayersList game={game}></PlayersList>
    </>
  );
}
