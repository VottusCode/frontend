import React from "react";

export type CmdResponseBlockProps = {
  text: string | React.ReactNode;
};

export const CmdResponseBlock: React.FC<CmdResponseBlockProps> = ({ text }) => (
  <div className="cmd-res">{text}</div>
);
