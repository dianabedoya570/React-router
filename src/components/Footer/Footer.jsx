import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  const { children } = props;
  return <div className="footer">{children}</div>;
};

export default Footer;