import React from "react";
import { Link } from "react-router-dom";
import { Console } from "../console";
import { CmdInputBlock } from "../console/line/CmdInputBlock";

export const FooterConsole: React.FC = () => (
  <Console
    host="vottuscode@vottus:/#"
    commands={[
      {
        input: "contact",
        response: (
          <>
            <p>
              <CmdInputBlock text="GitHub:" />
              <a href="https://github.com/VottusCode">VottusCode</a>
            </p>

            <p>
              <CmdInputBlock text="Twitter:" />
              <a href="https://twitter.com/vottusofficial">@vottusofficial</a>
            </p>

            <p>
              <CmdInputBlock text="Blog:" />
              <Link to="/blog">https://vott.us/blog</Link>
            </p>
          </>
        ),
      },
      {
        input: "exit",
        response: (
          <>2020 &copy; Filip Vottus, vott.us &ndash; All Rights Reserved</>
        ),
      },
    ]}
  />
);

export default FooterConsole;
