import React, { Profiler } from "react";
import LazyLoad from "react-lazyload";
import Definition from "./Definition";
import Work from "./Work";
import ErrorBoundary from "../../../components/ErrorBoundary";
import { default as Experience, Improve } from "./Experience";

const Sections = () => {
  const fallBack = <p>Loading ...</p>;

  let sections = [
    { name: Definition, id: 1, profilerId: "definition" },
    { name: Work, id: 2, profilerId: "work" },
    { name: Experience, id: 3, profilerId: "experience" },
    { name: Improve, id: 4, profilerId: "improve" }
  ];

  return (
    <main>
      <section>
        {sections.map(Section => (
          <ErrorBoundary key={Section.id}>
            <LazyLoad height={200}>
              <Profiler
                id={Section.profilerId}
                onRender={(
                  id, // the "id" prop of the Profiler tree that has just committed
                  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
                  actualDuration, // time spent rendering the committed update
                  baseDuration, // estimated time to render the entire subtree without memoization
                  startTime, // when React began rendering this update
                  commitTime, // when React committed this update
                  interactions // the Set of interactions belonging to this update
                ) =>
                  console.log(
                    `id:::::::: ${id}, phase:::::: ${phase}, actualDuration::::: ${actualDuration}, startTime::::::::: ${baseDuration}, commitTime::::::: ${commitTime}, interactions::::::::: ${interactions}`
                  )
                }
              >
                <Section.name />
              </Profiler>
            </LazyLoad>
          </ErrorBoundary>
        ))}
      </section>
    </main>
  );
};

export default Sections;
