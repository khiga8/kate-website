import React from "react";
import { ImageCard } from "./ImageCard.js";
export class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.generateGallery = this.generateGallery.bind(this);
  }

  generateGallery(rowNum, imageGallery) {
    let gallery = [];
    let col = [];
    for (let i = 0; i < imageGallery.length; i++) {
      const container = (
        <ImageCard
          img={this.props.imageMap[i][0]}
          text={this.props.imageMap[i][1]}
          link={this.props.imageMap[i][2]}
        />
      );
      col.push(container);
      if (col.length === rowNum || i === imageGallery.length - 1) {
        gallery.push(<div className="column"> {col} </div>);
        col = [];
      }
    }
    return gallery;
  }

  render() {
    const gallery = this.generateGallery(
      this.props.rowNum,
      this.props.imageMap
    );
    return (
      <div className="gallery">
        <div className="row"> {gallery} </div>{" "}
      </div>
    );
  }
}
