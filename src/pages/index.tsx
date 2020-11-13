import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import background from "../assets/svg/bg.svg";
import question from "../assets/svg/question.svg";

import AboutMe from "./index-sections/AboutConsole";
import ProjectsTitle from "./index-sections/projects/ProjectsTitle";
import { Projects } from "./index-sections/projects/Projects";
import { Title } from "./index-sections/Title";
import FooterConsole from "../components/layout/FooterConsole";

export const QuestionMark: React.FC<{ width: string; marginLeft: string }> = (
  props
) => (
  <img
    src={question}
    style={{ display: "block", ...props }}
    alt="Question Mark"
  />
);

export const IndexPage: React.FC = () => {
  return <div className="h-screen w-screen bg-gray-900"></div>;
};

export default IndexPage;
