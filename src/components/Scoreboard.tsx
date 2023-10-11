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
    <div className="w-full h-[92px] flex flex-row items-center justify-between p-2 px-8 bg-white shadow-lg">
      <div className="w-[40%] flex flex-row items-center justify-around">
        <img
          className="h-10 w-10 rounded-full"
          src={
            "https://images.trustinnews.pt/uploads/sites/5/2023/04/23472567.jpg"
          }
          alt=""
        />
        <h2 className="text-sm lg:text-xl">{props.teams[0].name}</h2>
      </div>
      <div className="w-[20%] flex flex-col items-center justify-between">
        <div className="w-[20%] flex flex-row items-center justify-center h-[50%]">
          <h2 className="text-md lg:text-2xl">{props.teams[0].score}</h2>
          <h2 className="text-md lg:text-2xl">-</h2>
          <h2 className="text-md lg:text-2xl">{props.teams[1].score}</h2>
        </div>
        <div className="h-[50%] flex flex-row items-center justify-center">
          <h2 className="text-md lg:text-xl">{props.turn}nd Quarter</h2>
        </div>
      </div>
      <div className="w-[40%] flex flex-row items-center justify-around">
        <h2 className="text-sm lg:text-xl">{props.teams[1].name}</h2>
        <img
          className="h-10 w-10 rounded-full"
          src={
            "https://play-lh.googleusercontent.com/ue88El81ZXdm4YPNcsn3No7VYnh9ZEWwJYNbCTxM6_K1cLfpezsLS6fOxwQR1Z9kEms"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Scoreboard;
