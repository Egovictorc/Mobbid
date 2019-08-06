import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navbar";
import Footer from "./Footer";

import Seo from "./Seo";

const Layout = ({ title, children }) => (
  <>
    <Seo title={title} />
    <Navigation />
    {children}
    <Footer />
  </>
);

export default Layout;

Layout.defaultProps = {
    title: `Mobbid NG`
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
