import React from "react";

interface ITeam {
  name: string;
  score: number;
  color: string;
}

interface IScoreboard {
  teams: ITeam[];
  onTeamScoreChange?: (teamName: string, newScore: number) => void;
  turn: number;
}

const Scoreboard: React.FC<IScoreboard> = (props) => {
  return (
    <div className="w-full h-[92px] flex flex-row items-center justify-between p-2 border-b-[1px] border-b-[#00000040]">
      <div className="w-[40%] flex flex-row items-center justify-between">
        <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
        <h2 className="text-xl">{props.teams[0].name}</h2>
      </div>
      <div className="w-[20%] flex flex-col items-center justify-between">
        <div className="w-[20%] flex flex-row items-center justify-center h-[50%]">
          <h2 className="text-2xl">{props.teams[0].score}</h2>
          <h2 className="text-2xl">-</h2>
          <h2 className="text-2xl">{props.teams[1].score}</h2>
        </div>
        <div className="h-[50%] flex flex-row items-center justify-center">
          <h2 className="text-xl">{props.turn}nd Quarter</h2>
        </div>
      </div>
      <div className="w-[40%] flex flex-row items-center justify-between">
        <h2 className="text-xl">{props.teams[1].name}</h2>
        <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Scoreboard;
