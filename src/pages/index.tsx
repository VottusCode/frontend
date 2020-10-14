import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

let parallax = null as Parallax | null;

export default () => (
  <Parallax ref={(ref) => (parallax = ref)} pages={3}>
    <div className="container is-fluid">
      <ParallaxLayer
        offset={0}
        speed={1}
        // @ts-ignore
        style={{ display: "flex" }}
      >
        <div
          className="content landing-title"
          style={{ marginTop: "auto", marginBottom: "auto" }}
        >
          <h1>Vottus</h1>
          <h2>Smol Vottus</h2>
        </div>
      </ParallaxLayer>
    </div>
  </Parallax>
);
