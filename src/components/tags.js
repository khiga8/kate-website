import React from "react";
import { rhythm } from "../utils/typography";

const Tags = ({ children }) => {
  return (
    children && (
      <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
        {children.split(", ").map((t) => (
          <li
            key={t}
            className="tags"
            style={{
              borderRadius: "15px",
              padding: "2px 8px",
              fontSize: rhythm(1 / 2),
              marginRight: rhythm(1 / 2),
              color: "white",
              listStyle: "none",
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    )
  );
};
export default Tags;
