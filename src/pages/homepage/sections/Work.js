import React from "react";
import LazyLoad from "react-lazyload";
import PlaceHolder from "./placeHolder";
// import { motion } from 'framer-motion'
// import works data
import WorksData from "./WorksData";

export const Work = () => {
  
  return (
    <div className="section__work work">
      <h2 className="section__heading work__heading">here is how it works</h2>

      {WorksData.map(({ className, article, imageContainer}, index) => (
        <div  className={className} key={ `${article.heading.className}-${index}` }>
          <article className={article.className}>
            <h3 className={article.heading.className}>
              {" "}
              {article.heading.content}{" "}
            </h3>
            <p className={article.paragraph.className}>
              {" "}
              {article.paragraph.content}{" "}
            </p>
          </article>
          <div className={imageContainer.className}>
            <LazyLoad
              height={imageContainer.lazyload.height}
              offset={imageContainer.lazyload.offset}
              debounce={imageContainer.lazyload.debounce}
            >
              <img
                className={imageContainer.lazyload.image.className}
                srcSet={imageContainer.lazyload.image.srcSet}
                sizes={imageContainer.lazyload.image.sizes}
                src={imageContainer.lazyload.image.src}
                alt={imageContainer.lazyload.image.alt}
              />
            </LazyLoad>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
