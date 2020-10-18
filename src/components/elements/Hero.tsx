import React from "react";

export type HeroProps = {
  color?: "primary" | "info" | "warning" | "success";
  size?: "small" | "medium" | "large" | "normal";
  className?: string;
};

export const Hero: React.FC<HeroProps> = ({
  color,
  size,
  children,
  className,
}) => (
  <div
    className={`
      hero is-fade-item
      ${color ? `is-${color}` : ""} 
      ${size && size !== "normal" ? `is-${size}` : ""} 
      ${className ? className : ""}
    `}
  >
    <div className="hero-body">{children}</div>
  </div>
);

export default Hero;
