import React, { useState } from "react";

interface IArea {
  id: number;
  d?: string;
  points?: string;
  transform?: string;
  cx?: string;
  cy?: string;
  rx?: string;
  ry?: string;
  width?: string;
  height?: string;
  x?: string;
  y?: string;
  onClick?: (id: number) => void;
  type: "path" | "polygon" | "ellipse" | "rect";
}

const Area: React.FC<IArea> = ({ id, onClick, type, ...data }) => {
  const [hover, setHover] = useState(false);

  const commonProps = {
    fill: hover ? "#0000FF40" : "rgba(0, 0, 0, 0)",
    stroke: "#00000070",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onClick && onClick(id),
  };

  const element = React.createElement(type, {
    ...data,
    ...commonProps,
  });

  return element;
};

export default Area;
