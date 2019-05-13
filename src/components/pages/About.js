import React from "react";

const About = props => {
  console.log(props);
  
  return (
    <div>
      <h1 className="about__heading"> About us </h1>
      <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div>
    </div>
  );
};

export default About;
