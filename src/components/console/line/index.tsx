import React from "react";
import { CmdHostBlock } from "./CmdHostBlock";
import { CmdInputBlock } from "./CmdInputBlock";
import { CmdResponseBlock } from "./CmdResponseBlock";

export type CmdLineProps = {
  host: string;
  cmd: string;
  response: string | React.ReactNode;
};

export const CmdLine: React.FC<CmdLineProps> = ({ host, cmd, response }) => (
  <>
    <CmdHostBlock text={host} /> <CmdInputBlock text={cmd} />
    <CmdResponseBlock text={response} />
  </>
);
