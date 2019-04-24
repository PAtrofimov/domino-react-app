import React, { Component } from "react";
import HalfCard from "./HalfCard";

class Card extends Component {
  render() {
    const { top, bottom, angle, animationSpeed, scale } = this.props;

    return (
      <div
        className="domino"
        id="domino-card"
        style={{
          transition: `transform ${animationSpeed}s`,
          transform: `scale(${scale}) rotate(${angle}deg)`
        }}
      >
        <HalfCard value={top} isCard={true} top={true} onClick={null} />
        <div className="line" />
        <HalfCard value={bottom} isCard={true} top={false} onClick={null} />
      </div>
    );
  }
}

export default Card;
