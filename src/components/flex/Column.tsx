import React from "react";

export type ColumnProps = {
  size: string;
};

export const Column: React.FC<ColumnProps> = ({ children, size }) => (
  <div className={`column ${size ? size : ""}`}>{children}</div>
);

export default Column;
