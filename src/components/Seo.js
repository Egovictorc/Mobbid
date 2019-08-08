import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import bg2x from '../images/tinified/bg@2x.png';
import iPhone1x from '../images/tinified/iphone@1x.png';
import iPhone2x from '../images/tinified/iphone@2x.png';


const Seo = ({ title }) => (
  <Helmet
    title={title}
    titleTemplate="Mobbid NG | %s"
    meta={[
      { name: "author", content: "Ego Victor, Anelechi Edwin" },
      { name: "keywords", content: `${title} Mobbid, Mobbid NG` },
      { name: "description", content: `${title} Mobbid NG` }
    ]}
    link={[
      { rel: "preload", href: `${bg2x}`, as: "image" },
      {
        rel: "preload",
        href: `${iPhone1x}`,
        as: "image",
        media: "(max-width='550px')"
      },
      {
        rel: "preload",
        href: `${iPhone2x}`,
        as: "image",
        media: "(min-width='550px')"
      }
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
