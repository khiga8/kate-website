import React from "react";

export class CoffeeDrink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="coffee-body">
        <div class="coffee-drink">
          <div class="cup">
            <div class="straw" />
            <div class="lid" />
            <div class="handle" />
            <div class="coffee-content" />
          </div>
        </div>
      </div>
    );
  }
}
