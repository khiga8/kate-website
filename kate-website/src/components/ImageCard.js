import React from "react";

export class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <a className="gallery-link" target="_blank" href={this.props.link}>
          <img src={this.props.img} />
        </a>
        <div className="text">
          <span> {this.props.text} </span>
        </div>
      </div>
    );
  }
}
