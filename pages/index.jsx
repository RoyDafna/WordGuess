import AddPlayer from "../components/AddPlayer";
import { GameState } from "../states/GameState";
export default function App()
{
    const game = new GameState();
    return(
        <>
        <AddPlayer game={game}></AddPlayer>
        </>
    )
} 