import React, {useState, useEffect} from 'react';
import LazyLoad from 'react-lazyload';
import { withRouter, Link } from 'react-router-dom';
//IMPORT IPHONE IMAGES
import iphone1x from "../../../../images/iphone@1x.png";
import iphone2x from "../../../../images/iphone@2x.png";
// import iphone3x from "../../../../images/iphone@3x.png";

const Definition = props=> {


    let articles = [ 
        { class: "article article__social", 
        heading: "social carpooling", 
        headingClass: "article__heading article__heading--social",
        parClass: "article__par article__par--social", 
        paragraph: "mobbid connects you with neighbours, coworkers and cool new people going your way" },

        { class: "article article__ride", 
        heading: "ride scheduling", 
        headingClass: "article__heading article__heading--ride", 
        parClass: "article__par article__par--ride", 
        paragraph: "schedule your rides and invite your friends with a click of the button" },    
    ]

    return (
        <section className="defn">
            
        <h2 className="section__heading defn__heading heading2"> what is mobbid ? </h2>
            
            <div className="defn__article-container">
                {articles.map( article => <article className={article.class} key={article.heading}>
                    <h3 className={article.headingClass}> {article.heading} </h3>
                    <p className={article.parClass}> {article.paragraph} </p>
                    </article> 
                )}
            </div>

            <div className="defn__img-container">
                <LazyLoad height={100} offset={50}>
                <img className="defn__img" 
                srcSet={ `${iphone2x} 1256w, ${iphone1x} 628w`}
            sizes="(min-width: 550px), (max-width: 549px)" 
                src={iphone1x} alt="Mobbid iPhone" />
                </LazyLoad>
            </div>
        </section>
    )
}


export default withRouter(Definition);