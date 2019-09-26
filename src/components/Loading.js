import React from "react";
import LoadingArrow from "../images/gif/loading-arrow.gif";
import Building from "../images/building.png";

import styled from "styled-components";
import { FaAnkh } from "react-icons/fa";

export const Loading = () => {
  return (
    <section style={{height: `400px`}}>
      <div style={{ textAlign: "center" }}>
        <img src={Building} alt=" loading"  className="loading" />{" "}
      </div>
      <div
        className=""
        style={{ textAlign: "center", textTransform: 'capitalize' }}
      >
        <FaAnkh
          size="30px"
          css={`
            color: purple;
          `}
          
        />
        <p> Loading ... </p>
        <p> please wait... </p>
      </div>
    </section>
  );
};

export const LoadingError = () => {
  return (
    <section>
      <div style={ {textAlign: 'text-center', textTransform: 'uppercase'} }>
        <FaAnkh
          size="30px"
          css={`
            color: purple;
          `}
        />
        <p>sorry, unknown error occured </p>
        <p> please try again </p>
      </div>
    </section>
  );
};

export const LoadingTimedOut = () => {
  return (
    <section>
      <div className="" style={ {textTransform: 'uppercase', textAlign: 'center'} }>
        <FaAnkh
          size="30px"
          css={`
            color: purple;
          `}
        />
        <p>sorry, connection timed out </p>
        <p> please try again </p>
      </div>
    </section>
  );
};

const getLoading = props => {
  if (props.pastDelay) {
    return <Loading />;
  } else if (props.timedOut) {
    return <LoadingTimedOut />;
  } else if (props.error) {
    return <LoadingError />;
  } else {
    return null;
  }
};

export default getLoading;
