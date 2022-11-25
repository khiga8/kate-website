import React from "react";
import Navigation from "./navigation";
import { rhythm } from "../utils/typography";

const Layout = ({ location, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(35),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Navigation location={location} />
      <main style={{ marginBottom: rhythm(1 / 2) }}>{children}</main>
      <footer
        style={{
          marginBottom: rhythm(1 / 4),
          fontSize: "0.8em",
        }}
      >
        © 2019-{new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
