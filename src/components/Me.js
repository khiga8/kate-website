import React from "react";

export class Me extends React.Component {
  render() {
    return (
      <div className="code-me">
        <div className="heart"> ♥ </div>
        <div className="girl">
          <div className="hair" />
          <div className="bangs">
            <div className="bang one" />
            <div className="bang two" />
            <div className="bang three" />
            <div className="bang four" />
            <div className="bang five" />
          </div>
          <div className="face">
            <div className="mouth" />
            <div className="eyebrows">
              <div className="eyebrow left" />
              <div className="eyebrow right" />
            </div>
            <div className="eyes">
              <div className="eye left" />
              <div className="eye right" />
            </div>
            <div className="cheeks">
              <div className="cheek left" />
              <div className="cheek right" />
            </div>
          </div>
        </div>
        <div className="css"> Kate (in CSS form) </div>
      </div>
    );
  }
}
