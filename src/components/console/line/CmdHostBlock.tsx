import React from "react";

export type CmdHostBlockProps = {
  text: string;
};

export const CmdHostBlock: React.FC<CmdHostBlockProps> = ({ text }) => (
  <code>{text}</code>
);
