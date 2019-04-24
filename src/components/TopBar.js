import React, { Component } from "react";

class TopBar extends Component {
  onRotateLeft = ev => {
    this.props.handleRotateLeft();
  };

  onRotateRight = ev => {
    this.props.handleRotateRight();
  };

  onNewCard = ev => {
    this.props.handleNewCard();
  };

  render() {
    return (
      <div className="top-bar">
        <button className="btn-left btn" onClick={this.onRotateLeft}>
          Left
        </button>

        <button className="btn-new btn" onClick={this.onNewCard}>
          New domino
        </button>

        <button className="btn-right btn" onClick={this.onRotateRight}>
          Right
        </button>
      </div>
    );
  }
}

export default TopBar;
