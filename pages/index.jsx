import AddPlayer from "../components/AddPlayer";
import LetterBank from "../components/LetterBank";
import PlayTurnButton from "../components/PlayTurnButton";
import PlayerCard from "../components/PlayerCard";
import PlayersList from "../components/PlayersList";
import RevealedWord from "../components/RevealedWord";
import StartButton from "../components/StartButton";
import WinnerName from "../components/WinnerName";
import { GameState } from "../states/GameState";
export default function App() {
  const game = new GameState();
  return (
    <>
      <WinnerName game={game}></WinnerName> <br /> <br />
      <AddPlayer game={game}></AddPlayer> <br />
      <PlayTurnButton game={game}></PlayTurnButton>
      <StartButton game={game}></StartButton>
      <br />
      <br />
      <LetterBank game={game}></LetterBank>
      <br />
      <RevealedWord game={game}></RevealedWord>
      <PlayersList game={game}></PlayersList>
    </>
  );
}
