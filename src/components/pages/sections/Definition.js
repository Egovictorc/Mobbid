import React from 'react';
import LazyLoad from 'react-lazyload';
import Phone from "../../../images/phone.png";

const Definition = ()=> {

    return (
        <section className="defn">
            <h2 className="section__heading defn__heading heading2"> what is mobbid? </h2>
            
            <div className="defn__article-container">
                <article className="article article__social">
                    <h3 className="article__heading article__heading--social">social carpooling</h3>
                    <p className="article__par article__par--social">mobbid connects you with neighbours, coworkers and cool new people going your way</p>
                </article>

                <article className="article article__ride">
                    <h3 className=" article__heading article__heading--ride">ride scheduling</h3>
                    <p className="article__par article__par--ride">schedule your rides and invite your friends with a click of the button</p>
                </article>
            </div>

            <div className="defn__img-container">
                <LazyLoad height={100} offset={50}>
                <img className="defn__img" src={Phone} alt="Phone-img" />
                </LazyLoad>
            </div>
        </section>
    )
}


export default Definition;