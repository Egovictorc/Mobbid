import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Seo = ({ title }) => (
  <Helmet
    title={title}
    titleTemplate="%s | Mobbid NG"
    meta={[
      { name: "author", content: "Ego Victor, Anelechi Edwin" },
      { name: "keywords", content: `${title} Mobbid, Mobbid NG` },
      { name: "description", content: `${title} Mobbid NG` }
    ]}
  />
);

export default Seo;

Seo.defaultProps = {
  title: `Mobbid NG`
};

Seo.propTypes = {
  title: PropTypes.string.isRequired
};
