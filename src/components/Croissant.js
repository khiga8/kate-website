import React from "react";

export class Croissant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="croissant-illustration">
        <div class="plate">
          <div class="croissant">
            <div class="croissant-piece light point-one" />
            <div class="croissant-piece dark pos0 top" />
            <div class="croissant-piece light pos1 top" />
            <div class="croissant-piece dark center" />
            <div class="croissant-piece light pos2 bottom" />
            <div class="croissant-piece dark pos3 bottom" />
            <div class="croissant-piece light point-two" />
          </div>
        </div>
      </div>
    );
  }
}
