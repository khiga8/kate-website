import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
);

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <ul className="menu">
          <li className="left">
            <Link activeClassName="active" to="/">
              kate
            </Link>
          </li>
          <ListLink to="/about/">about me</ListLink>
        </ul>
      </div>
    );
  }
}
