import React from "react";

export const Title = () => (
  <div className="landing-title">
    {window.innerWidth < 760 && (
      <div
        className="mb-4 notification is-danger"
        style={{ maxWidth: "300px" }}
      >
        This website is not optimized for mobile devices. It will be fixed soon.
        <br />
        Blog is not affected by this issue.
      </div>
    )}

    <h1>Vottus</h1>
    <h2>Web Developer</h2>

    <div className="mt-6">
      <button className="button is-primary is-rounded is-large">
        Let's go
      </button>
    </div>
  </div>
);
