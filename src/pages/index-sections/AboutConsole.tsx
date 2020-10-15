import React from "react";
import { Console } from "../../components/console";

export const AboutConsole = () => (
  <Console
    host="vottuscode@vottus:/#"
    commands={[
      { input: "whoami", response: "I am a Website Developer." },
      { input: "whereis me", response: "Prague, Czech Republic" },
      {
        input: "cat languages",
        response: "TypeScript, JavaScript, PHP, Java, Bash",
      },
      {
        input: "locate interests",
        response: "Programming, Anime, Manga",
      },
    ]}
  />
);

export const AboutMe = () => (
  <div
    className="container"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <AboutConsole />
  </div>
);

export default AboutMe;
