import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Contact = (props)=> {

  useEffect( ()=> {
    setTimeout(()=>{
        props.history.push("/")
    }, 10000)
},[])

console.log(props)
    return(
        <div>
        <h1 className="contact__heading"> Contact us </h1>
        <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div>
        </div>
    )
}

export default Contact;