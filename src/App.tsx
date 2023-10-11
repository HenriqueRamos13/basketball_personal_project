import { useState } from "react";
import Court from "./components/Court";
// import Menus from "./components/Menus";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";

const TEAMS = [
  {
    name: "Team Blue 1",
    score: 0,
    color: "red",
  },
  {
    name: "Team Red 2",
    score: 0,
    color: "blue",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [playersList1, setPlayersList1] = useState(false);
  const [playersList2, setPlayersList2] = useState(false);

  return (
    <>
      <Scoreboard teams={TEAMS} turn={2} />
      <div className="w-full flex justify-between py-2 lg:hidden">
        <button
          className="bg-white hover:bg-gray-100 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPlayersList1((p) => !p)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
            alt="menu toggle"
            className="w-6 h-6"
          />
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPlayersList2((p) => !p)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
            alt="menu toggle"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="w-full flex flex-row justify-between items-start h-full">
        {/* overflow-y-scroll */}
        <div
          className={classNames(
            "bg-white border-1 shadow-md min-w-[230px] w-[20%] h-[100%] overflow-y-scroll z-50 no-scrollbar lg:pt-[0px] flex flex-col gap-2 items-center justify-around p-2 absolute transition-all",
            playersList1 ? "left-0 lg:left-0" : "left-[-230px] lg:left-0"
          )}
        >
          <Player name="Player" number={1} />
          <Player name="Player" number={2} />
          <Player name="Player" number={3} />
          <Player name="Player" number={4} />
          <Player name="Player" number={5} />
          <Player name="Player" number={6} />
          <Player name="Player" number={7} />
          <Player name="Player" number={8} />
        </div>
        <div className="hidden lg:block lg:w-[20%]"></div>
        <div className="w-[100%] lg:w-[60%] h-[100%] lg:py-0">
          <Court />

          <span className="isolate inline-flex rounded-md shadow-sm w-full">
            <button
              type="button"
              className="relative w-[25%] h-16 inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Status
            </button>
            <button
              type="button"
              className="relative w-[25%] h-16 -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Jogadas
            </button>
            <button
              type="button"
              className="relative w-[25%] h-16 -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Periodo
            </button>

            <button
              type="button"
              className="relative w-[25%] h-16 -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Fim de jogo
            </button>
          </span>
        </div>
        <div
          className={classNames(
            "bg-white border-1 shadow-md min-w-[230px] w-[20%] h-[100%] overflow-y-scroll z-50 no-scrollbar lg:pt-[0px] flex flex-col gap-2 items-center justify-around p-2 absolute transition-all",
            playersList2 ? "right-0 lg:right-0" : "right-[-230px] lg:right-0"
          )}
        >
          <Player name="Player" number={1} />
          <Player name="Player" number={2} />
          <Player name="Player" number={3} />
          <Player name="Player" number={4} />
          <Player name="Player" number={5} />
          <Player name="Player" number={6} />
          <Player name="Player" number={7} />
          <Player name="Player" number={8} />
        </div>
        <div className="hidden lg:block lg:w-[20%]"></div>
      </div>
      {/* <Menus /> */}
    </>
  );
}

export default App;
