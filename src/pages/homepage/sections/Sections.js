import React from "react";
import LazyLoad from "react-lazyload";
import Definition from "./Definition";
import Work from "./Work";
import ErrorBoundary from '../../../components/ErrorBoundary';
import { default as Experience, Improve } from "./Experience";


const Sections = () => {
  const fallBack = <p>Loading ...</p>;

  let sections = [
    {name: Definition, id: 1},
    {name: Work, id: 2},
    {name: Experience, id: 3},
    {name: Improve, id: 4},
  ];

  return (
    <main>
      <section>
    { sections.map( section => <ErrorBoundary key={section.id}><LazyLoad height={200}>
      <section.name />
      </LazyLoad>
      </ErrorBoundary>
    )}
    </section>
 
    </main>  
  )
};

export default Sections;
