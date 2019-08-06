import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./../components/Layout"; 

const NotFound = ()=> {
    return (
      <Layout>
        <div
          style={{
            minHeight: "60vh",
            paddingLeft: "2rem",
            margin: "0 auto"  
          }}
        >
          <div style={{ display: "block" }}>
            <h2>Page Not found</h2>
          </div>
          <div style={{} }>
            <p>The page you are looking for do not exist </p>
            
          </div>
          <div>
            <p> return to 
              &nbsp;<Link to="/" style={ {textDecoration: "none"} } >Home</Link> page
            </p>
          </div>
        </div>
      </Layout>
    );
}





export default NotFound;