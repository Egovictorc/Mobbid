import React, { useEffect } from "react";

const Customer = props => {

  useEffect( ()=> {
    setTimeout(()=>{
        props.history.push("/")
    }, 30000)
},[])

  return (
    <div>
      <h1 className="about__heading"> Customer Stories </h1>
      <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div>
    </div>
  );
};

export default Customer;
