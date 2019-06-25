import React, { useEffect } from "react";
import PageHold from "./PageHold";
import Layout from "../components/Layout";

const Customer = props => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 30000);
  }, []);

  return (
    <Layout title="Customer Stories">
    <div className="customer">
      <PageHold name="customer" />

      {/* <h1 className="about__heading"> Customer Stories </h1>
      <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div> */}
    </div>
    </Layout>
  );
};

export default Customer;
