import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from "../components/Layout";

const Contact = (props)=> {

  useEffect( ()=> {
    setTimeout(()=>{
        props.history.push("/")
    }, 30000)
},[])

console.log(props)
    return(
      <Layout title="Contact">
        <div className="contact">
        <h1 className="contact__heading"> Contact us </h1>
        <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div>
        </div>
        </Layout>
    )
}

export default Contact;