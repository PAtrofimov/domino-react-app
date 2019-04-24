import React, { Component } from "react";

class BottomBar extends Component {
  onScale = ev => {
    const {name, value} = ev.target;
    this.props.handleScale({[name]: value});
  };

  onSpeed = ev => {
    const {name, value} = ev.target;
    this.props.handleSpeed({[name]: value});
  };

  render() {
    const { scale, animationSpeed } = this.props;

    return (
      <div className="bottom-bar">
        <div className="slider-scale slider">
          <label htmlFor="id_scale">Scale domino</label>
          <input
            name="scale"
            type="range"
            min={1}
            max={2}
            step={0.2}
            value={scale}
            onInput={this.onScale}
            onChange={this.onScale}
            id="id_scale"
          />
          <span style={{ color: 'red' }}>{scale}</span>
        </div>
        <div className="slider-speed slider">
          <label htmlFor="id_speed">Anim. speed</label>
          <input
            name="animationSpeed"
            type="range"
            min={1}
            max={5}
            step={1}
            value={animationSpeed}
            onInput={this.onSpeed}
            onChange={this.onSpeed}
            id="id_speed"
          />
          <span style={{ color: 'green' }}>{animationSpeed} cек</span>
        </div>
      </div>
    );
  }
}

export default BottomBar;
