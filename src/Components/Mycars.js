import React from "react";
import Car from "./Cars";

class MyCars extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Car color="blue">Peugeot</Car>
        <Car color="">Toyota</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default MyCars;
