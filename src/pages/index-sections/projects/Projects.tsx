import React from "react";

import kitsuneWeb from "../../../assets/svg/proj/kitsune-web.png";
import okeykoWeb from "../../../assets/svg/proj/okeyko-web.png";
import unknownWeb from "../../../assets/svg/proj/unknown-web.png";
import Card from "../../../components/elements/Card";
import Column from "../../../components/flex/Column";
import { ColumnWrapper } from "../../../components/flex/ColumnWrapper";

export const PlaceholderCard = () => (
  <Card
    title="Unknown"
    isParallax={true}
    image={{ src: unknownWeb, alt: "Unknown" }}
  >
    <div className="content">Unknown</div>

    <div className="tech mt-5">
      <span className="tag is-danger">???</span>
    </div>
  </Card>
);

export const Projects = () => {
  const old = (
    <div className="container">
      <ColumnWrapper>
        {/* <Column size="is-one-third"> */}
        <Column size="is-half">
          <Card
            title="Kitsune VPN - Website"
            isParallax={true}
            image={{ src: kitsuneWeb, alt: "KitsuneVPN" }}
            link="https://kitsune.su"
          >
            <div className="content">
              Website Frontend for KitsuneVPN.
              {/* <br />
            <a
              href="https://kitsune.su"
              className="button is-primary is-rounded mt-5"
            >
              View
            </a> */}
            </div>

            <div className="tech mt-5">
              <span className="tag is-success mr-2">Vue.js CSR</span>
              <span className="tag is-link">TypeScript</span>
            </div>
          </Card>
        </Column>

        {/* <Column size="is-one-third"> */}
        <Column size="is-half">
          <Card
            title="Okeyko"
            isParallax={true}
            link="https://okeyko.fun"
            image={{ src: okeykoWeb, alt: "Okeyko" }}
          >
            <div className="content">
              Website and Backend for Okeyko's Website. Dashboard for OKBOT
              (Discord Moderation Bot) and currently working with them on some
              side-projects
              {/* <br />
            <a
              href="https://okeyko.fun"
              className="button is-primary is-rounded mt-5"
            >
              View
            </a> */}
            </div>

            <div className="tech mt-5">
              <span className="tag is-info mr-2">React CSR</span>
              <span className="tag is-success mr-2">Vue.js CSR</span>
              <span className="tag is-link">TypeScript</span>
            </div>
          </Card>
        </Column>

        {/* <Column size="is-one-third">
        <PlaceholderCard />
      </Column> */}
      </ColumnWrapper>
    </div>
  );

  return (
    <div className="container">
      <div className="mt-4" style={{ width: "100%" }}>
        <div className="notification is-danger has-text-centered">
          <h3 className="is-size-4" style={{ marginBottom: "0" }}>
            Projects are currently unavailable.{" "}
          </h3>
          Reason: Backend unreachable.
        </div>
      </div>
    </div>
  );
};

// export const ProjectsOld = () => {
//   return (
//     <div className="container">
//       <div className="columns">
//         <div className="column is-one-third">
//           <div className="card is-parallax" style={{ height: "500px" }}>
//             <div className="card-image">
//               <figure className="image is-16by9">
//                 <img src={kitsuneWeb} alt="Placeholder image" />
//               </figure>
//             </div>
//             <div className="card-content has-text-centered ">
//               <div className="mb-5">
//                 <p className="is-size-4 has-text-weight-medium">
//                   KitsuneVPN - Website
//                 </p>
//               </div>

//               <div className="content">
//                 Website Frontend for KitsuneVPN.
//                 <br />
//                 Live at <a href="https://kitsune.su">kitsune.su</a>
//               </div>

//               <div className="tech mt-5">
//                 <span className="tag is-success mr-2">Vue.js CSR</span>
//                 <span className="tag is-link">TypeScript</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="column is-one-third">
//           <div className="card is-parallax" style={{ height: "500px" }}>
//             <div className="card-image">
//               <figure className="image is-16by9">
//                 <img src={okeykoWeb} alt="Placeholder image" />
//               </figure>
//             </div>
//             <div className="card-content has-text-centered ">
//               <div className="mb-5">
//                 <p className="is-size-4 has-text-weight-medium">Okeyko</p>
//               </div>

//               <div className="content">
//                 Website and Backend for Okeyko's Website. Dashboard for OKBOT
//                 (Discord Moderation Bot) and currently working with them on some
//                 side-projects
//                 <br />
//                 Live at <a href="https://okeyko.fun">okeyko.fun</a>
//               </div>

//               <div className="tech mt-5">
//                 <span className="tag is-info mr-2">React CSR</span>
//                 <span className="tag is-link">TypeScript</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="column is-one-third">
//           <div className="card is-parallax" style={{ height: "500px" }}>
//             <div className="card-image">
//               <figure className="image is-16by9">
//                 <img src={unknownWeb} alt="Placeholder image" />
//               </figure>
//             </div>
//             <div className="card-content has-text-centered ">
//               <div className="mb-5">
//                 <p className="is-size-4 has-text-weight-medium">Unknown</p>
//               </div>

//               <div className="tech mt-5">
//                 <span className="tag is-danger">???</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
