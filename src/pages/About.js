import React, { useEffect } from "react";
import PageHold from './PageHold';
import Layout from "../components/Layout";

const About = props => {

  useEffect( ()=> {
    setTimeout(()=>{
        props.history.push("/")
    }, 30000)
},[])

  return (
    <Layout title="About">
      <PageHold name="about" />

      {/* <h1 className="about__heading"> About us </h1>
      <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div> */}
    </Layout>
  );
};

export default About;
