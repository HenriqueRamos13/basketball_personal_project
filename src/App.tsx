import Court from "./components/Court";
import Menus from "./components/Menus";
import Scoreboard from "./components/Scoreboard";

const TEAMS = [
  {
    name: "Team 1",
    score: 0,
    color: "red",
  },
  {
    name: "Team 2",
    score: 0,
    color: "blue",
  },
];

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="max-w-7xl w-screen h-screen max-h-[720px] flex flex-col items-start">
        <Scoreboard teams={TEAMS} turn={2} />
        <div className="w-full flex flex-row justify-between items-start">
          <div className="w-[15%] h-[680px] bg-green-500">gsdfg</div>
          <div className="w-[70%] h-[680px] bg-blue-500">
            <Court />
          </div>
          <div className="w-[15%] h-[680px] bg-green-500">gdsfg</div>
        </div>
        <Menus />
      </main>
    </div>
  );
}

export default App;
