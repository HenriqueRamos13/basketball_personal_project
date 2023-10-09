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
  return <div className="w-full h-[58px] bg-red-500">{props.turn || 0}</div>;
};

export default Scoreboard;
