import React from "react";
import { CmdLine } from "./line";

export type ConsoleProps = {
  host: string;
  commands: {
    input: string;
    response: string;
  }[];
};

export const Console: React.FC<ConsoleProps> = ({ host, commands }) => (
  <div className="console">
    <div className="bars-wrapper">
      <div className="bars">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div className="console-content">
      {commands.map(({ input, response }, key) => (
        <CmdLine host={host} cmd={input} response={response} key={key} />
      ))}
    </div>
  </div>
);
