import React, { useEffect } from "react";
import PageHold from './PageHold'


const Works = props => {

  useEffect( ()=> {
    setTimeout(()=>{
        props.history.push("/")
    }, 30000)
},[])

  return (
    <div className="works">
      <PageHold name="works" />
{/*       
      <h1 className="about__heading"> how it works </h1>
      <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div> */}
    </div>
  );
};

export default Works;