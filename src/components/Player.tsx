import React from "react";

interface IPlayer {
  name: string;
  number: number;
  onClick?: () => void;
}

const Player: React.FC<IPlayer> = (props) => {
  return (
    <div className="w-full h-[58px] shadow-md rounded-sm border border-[#00000030] flex flex-row items-center justify-center gap-2 hover:cursor-pointer">
      <h2 className="text-2xl">{props.number} -</h2>
      <p className="text-xl">{props.name}</p>
    </div>
  );
};

export default Player;
