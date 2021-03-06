import React, { Fragment } from "react";
import Menu from "./Menu";
import "../style.css";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <Fragment>
    <Menu />
    <div className="jumbotron h-25 h-sm-20">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </Fragment>
);

export default Layout;
