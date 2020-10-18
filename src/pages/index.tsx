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
  let parallax = null as Parallax | null;

  return (
    <Parallax ref={(ref) => (parallax = ref)} pages={3.5}>
      {/* Layer 0 Title - Purple Background */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        // @ts-ignore
        style={{ background: "rgba(120, 0, 206, 0.3)" }}
      />

      {/* All Layers - Dots Background */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3.5}
        // @ts-ignore
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 1 - Question Marks */}
      <ParallaxLayer
        offset={1}
        speed={0.8}
        // @ts-ignore
        style={{ opacity: 0.1 }}
      >
        <QuestionMark width="20%" marginLeft="55%" />
        <QuestionMark width="10%" marginLeft="15%" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.2}
        // @ts-ignore
        style={{ opacity: 0.2 }}
      >
        <QuestionMark width="10%" marginLeft="10%" />
        <QuestionMark width="20%" marginLeft="75%" />
      </ParallaxLayer>

      {/*         */}
      {/* Content */}
      {/*         */}

      {/* Layer 0 - Title */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        // @ts-ignore
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginLeft: "60px",
        }}
      >
        <Title />
      </ParallaxLayer>

      {/* Layer 1 - About Me */}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        // @ts-ignore
        onClick={() => parallax.scrollTo(2)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AboutMe />
      </ParallaxLayer>

      {/* Layer 2 - Projects Title */}
      <ParallaxLayer
        offset={2.1}
        speed={-0}
        // @ts-ignore
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        // @ts-ignore
        onClick={() => parallax.scrollTo(0)}
      >
        <ProjectsTitle />
      </ParallaxLayer>

      {/* Layer 2 - Projects */}
      <ParallaxLayer
        offset={2.1}
        speed={0.5}
        // @ts-ignore
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // @ts-ignore
        onClick={() => parallax.scrollTo(2.5)}
      >
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.8}
        speed={0.5}
        // @ts-ignore
        style={{
          display: "flex",
          alignItems: "center",
        }}
        // @ts-ignore
        onClick={() => parallax.scrollTo(0)}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterConsole />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default IndexPage;
