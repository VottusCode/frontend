/* eslint-disable jsx-a11y/alt-text */
// because of CardImage having alt as an optional prop
import React from "react";

export type CardProps = {
  isParallax: boolean;
  image?: CardImageProps;
  title?: string;
};

export type CardImageProps = {
  src: string;
  alt?: string;
};

export const CardImage: React.FC<CardImageProps> = (props) => (
  <div className="card-image">
    <figure className="image is-16by9">
      <img {...props} />
    </figure>
  </div>
);

export const CardTitle: React.FC<{ text: string }> = ({ text }) => (
  <div className="mb-5">
    <p className="is-size-4 has-text-weight-medium">{text}</p>
  </div>
);

export const CardContent: React.FC<{ title?: string }> = ({ title }) => {
  return <div></div>;
};

export const Card: React.FC<CardProps> = ({
  isParallax,
  image,
  title,
  children,
}) => (
  <div
    className={`card ${isParallax ? "is-parallax" : ""}`}
    style={{ height: "500px" }}
  >
    {image && <CardImage {...image} />}
    <div className="card-content has-text-centered ">
      {title && <CardTitle text={title} />}

      {children && children}
    </div>
  </div>
);

export default Card;