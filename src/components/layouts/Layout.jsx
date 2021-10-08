import React from "react";
import "./Layout.css";

const Layout = (props) => {
  const classname = `layout-container ${props.type}`;

  return <div className={classname}>{props.children}</div>;
};

export default Layout;
