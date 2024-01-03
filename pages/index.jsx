import { useEffect, useRef, useState } from "react";
import AddPlayer from "../components/AddPlayer";
import LetterBank from "../components/LetterBank";
import PlayTurnButton from "../components/PlayTurnButton";
import PlayerCard from "../components/PlayerCard";
import PlayersList from "../components/PlayersList";
import RevealedWord from "../components/RevealedWord";
import StartButton from "../components/StartButton";
import WinnerName from "../components/WinnerName";
import { GameState } from "../states/GameState";
import TurnTimer from "../components/TurnTimer";

export default function App() {
  const game = new GameState();

  return (
    <>
      <WinnerName game={game} /> <br /> <br />
      <AddPlayer game={game} /> <br />
      <TurnTimer game={game} />
      <StartButton game={game} />
      <LetterBank game={game} />
      <RevealedWord game={game} />
      <PlayersList game={game} />
    </>
  );
}
