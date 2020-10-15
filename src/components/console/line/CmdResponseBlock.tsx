import React from "react";

export type CmdResponseBlockProps = {
  text: string;
};

export const CmdResponseBlock: React.FC<CmdResponseBlockProps> = ({ text }) => (
  <div className="cmd-res">{text}</div>
);
