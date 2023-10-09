import Court from "./components/Court";
// import Menus from "./components/Menus";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";

const TEAMS = [
  {
    name: "Team Blue",
    score: 0,
    color: "red",
  },
  {
    name: "Team Red",
    score: 0,
    color: "blue",
  },
];

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="max-w-7xl w-screen h-screen max-h-[720px] flex flex-col items-start border border-[#00000040] shadow-md">
        <Scoreboard teams={TEAMS} turn={2} />
        <div className="w-full flex flex-row justify-between items-start overflow-y-scroll">
          <div className="w-[15%] h-[680px] flex flex-col gap-2 items-center justify-around p-2">
            <Player name="Player" number={1} />
            <Player name="Player" number={2} />
            <Player name="Player" number={3} />
            <Player name="Player" number={4} />
            <Player name="Player" number={5} />
            <Player name="Player" number={6} />
            <Player name="Player" number={7} />
            <Player name="Player" number={8} />
          </div>
          <div className="w-[70%] h-[680px]">
            <Court />
          </div>
          <div className="w-[15%] h-[680px] flex flex-col gap-2 items-center justify-around p-2">
            <Player name="Player" number={1} />
            <Player name="Player" number={2} />
            <Player name="Player" number={3} />
            <Player name="Player" number={4} />
            <Player name="Player" number={5} />
            <Player name="Player" number={6} />
            <Player name="Player" number={7} />
            <Player name="Player" number={8} />
          </div>
        </div>
        {/* <Menus /> */}
      </main>
    </div>
  );
}

export default App;
