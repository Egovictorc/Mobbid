import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Definition from "./Definition";
import Work from "./Work";
import { default as Experience, Improve } from "./Experience";

//const Work = LazyLoad(() => import("./Work"));

const Sections = () => {
  const fallBack = <p>Loading ...</p>;

  let sections = [
    {name: Definition, },
    {name: Work, },
    {name: Experience, },
    {name: Improve, },
  ]
  return (
    <section>
    { sections.map( section => <LazyLoad height="70">
      <section.name />
      </LazyLoad>
    )}
    </section>
  );
};

export default Sections;
