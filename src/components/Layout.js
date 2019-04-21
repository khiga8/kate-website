import React from "react";
import {Link} from "gatsby";
import {Helmet} from "react-helmet";
import {Header} from "../components/Header.js";
import favicon from "./../pages/favicon.png";
export default ({children}) => (
  <div className="main">
    <Helmet>
      <title> Kate </title> <meta name="description" content="Kate" />{" "}
      <link rel="icon" type="/image/png" href={favicon} />
    </Helmet>
    <Header />

    <div className="blog-section">
      <div className="menu">
        <Link className="back" to="/now/">
          back to now
        </Link>
      </div>
      {children}
    </div>
  </div>
);
