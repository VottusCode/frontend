import React from "react";

export type CmdInputBlockProps = {
  text: string;
};

export const CmdInputBlock: React.FC<CmdInputBlockProps> = ({ text }) => (
  <span className="cmd">{text}</span>
);
