import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Definition from "./Definition";
import Work from "./Work";
import { default as Experience, Improve } from "./Experience";

//const Work = LazyLoad(() => import("./Work"));

const Sections = () => {
  const fallBack = <p>Loading ...</p>;

  return (
    <section>
      <Suspense fallback={fallBack}>
        <Definition />
      </Suspense>

      <LazyLoad height="70">
        <Work />
      </LazyLoad>

      <LazyLoad height="70">
        <Experience />
      </LazyLoad>

      <LazyLoad height="70">
        <Improve />
      </LazyLoad>
    </section>
  );
};

export default Sections;
