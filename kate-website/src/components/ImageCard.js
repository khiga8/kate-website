import React from "react"

export class ImageCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img src={this.props.img} />
        <div className="text">
          <span> {this.props.text} </span>
        </div>
      </div>
    );
  }
}
