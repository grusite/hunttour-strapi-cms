import React, { memo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// import favicon from "../../favicon.png";
// import favicon from "../../assets/images/logo_rb.svg";
import favicon from "../../assets/images/logo-2gotours.svg";

const PageTitle = ({ title }) => (
  <Helmet
    title={title}
    link={[{ rel: "icon", type: "image/png", href: favicon }]}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageTitle);
