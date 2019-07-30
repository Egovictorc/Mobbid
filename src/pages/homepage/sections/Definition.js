import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { withRouter, Link } from "react-router-dom";
//IMPORT IPHONE IMAGES
import iphone1x from "../../../images/tinified/iphone@1x.png";
import iphone2x from "../../../images/tinified/iphone@2x.png";
// import iphone3x from "../../../../images/iphone@3x.png";

const Definition = props => {
  let articles = [
    {
      className: "article article__social",
      heading: {
        class: "article__heading article__heading--social",
        content: "social carpooling"
      },
      paragraph: {
        class: "article__par article__par--social",
        content:
          "mobbid connects you with neighbours, coworkers and cool new people going your way"
      }
    },
    {
      className: "article article__ride",
      heading: {
        class: "article__heading article__heading--ride",
        content: "ride scheduling"
      },
      paragraph: {
        class: "article__par article__par--ride",
        content:
          "schedule your rides and invite your friends with a click of the button"
      }
    }
  ];

  return (
    <section className="defn">
      <h2 className="section__heading defn__heading heading2">
        {" "}
        what is mobbid ?{" "}
      </h2>

      <div className="defn__article-container">
        {articles.map(({ className, heading, paragraph }) => (
          <article className={className} key={heading.class}>
            <h3 className={heading.class}> {heading.content} </h3>
            <p className={paragraph.class}> {paragraph.content} </p>
          </article>
        ))}
      </div>

      <div className="defn__img-container">
        <LazyLoad height={100} offset={50}>
          <img
            className="defn__img"
            srcSet={`${iphone2x} 1256w, ${iphone1x} 628w`}
            sizes="(min-width: 550px), (max-width: 549px)"
            src={iphone1x}
            alt="Mobbid iPhone"
          />
        </LazyLoad>
      </div>
    </section>
  );
};

export default withRouter(Definition);
